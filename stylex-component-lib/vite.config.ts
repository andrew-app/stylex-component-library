import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { peerDependencies } from './package.json'
import { resolve } from 'path'
import dts from 'vite-plugin-dts';
import styleX from "vite-plugin-stylex";
import fs from 'fs';

// This is a Vite plugin that renames the output file from the StyleX plugin. source: https://github.com/HorusGoul/vite-plugin-stylex/issues/34#issuecomment-1922162438
function moveStylexFilenamePlugin(): Plugin {
  return {
    name: 'stylex-file-name',
    //@ts-ignore
    writeBundle(options, bundle) {
      for (const name in bundle) {
        const chunk = bundle[name];
        // Check if this is the stylex output cssfile
        if (chunk.type === 'asset' && /assets[/\\]stylex\.[a-f0-9]+\.css/.test(chunk.fileName)) {
          // Rename the file, move it from "assets" to "res" where the rest of our assets are for my use case.
          // Ideally this would use the format from `rollupOptions.output.assetFileNames`.
          const newName = 'stylex.css';
          if (options.dir == null) {
            this.error('Could not replace StyleX output, dir must be set');
          }
          const dir = options.dir as string;
          const oldPath = path.resolve(dir, chunk.fileName);
          const newPath = path.resolve(dir, newName);
          this.info(`Replacing StyleX output file ${chunk.fileName} with ${newName}`);
          fs.renameSync(oldPath, newPath);
          // Update the bundle object
          chunk.fileName = newName;
          bundle[newName] = chunk;
          delete bundle[name];
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(),
    dts({include: ['src/**/*']}),
    styleX(),
    moveStylexFilenamePlugin()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'stylex-component-lib',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], output: { preserveModules: false, exports: 'named' }
    },
    target: 'esnext',
    sourcemap: true
  },
})
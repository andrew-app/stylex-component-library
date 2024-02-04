import { GDSButton } from '.';
import * as stylex from '@stylexjs/stylex';

function App() {

  return (
    <>
      <GDSButton backgroundColor='red' {...stylex.props(styles.override)}>
        Click Me
      </GDSButton>
    </>
  )
}

export default App;

const styles = stylex.create({
  override: {
    ':hover': {
      backgroundColor: 'blue'
    }
  }
})
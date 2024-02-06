import { GDSButton } from '.';
import * as stylex from '@stylexjs/stylex';

function App() {

  return (
    <>
      <GDSButton overrideStyles={[styles.overrideBg, styles.overrideFont]}>
        Click Me
      </GDSButton>
    </>
  )
}

export default App;

const styles = stylex.create({
  overrideBg: {
    backgroundColor: {
      default: 'hsla(282.95, 82.24%, 41.96%, 1)',
      ':hover': 'hsla(282.95, 82.24%, 41.96%, 0.75)',
      ':active': 'hsla(282.95, 82.24%, 41.96%, 1)',
    },
  },
  overrideFont : {
    fontFamily: "Libre Franklin",
    fontSize: '2rem',
  }
})
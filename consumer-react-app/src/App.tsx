import {GDSButton} from 'stylex-component-lib';
import * as stylex from '@stylexjs/stylex';
function App() {

  return (
    <>
      <GDSButton overrideStyles={styles.overrideStyles}>
        Click Me
      </GDSButton>
    </>
  )
}

export default App

const styles = stylex.create({
  overrideStyles: {
      backgroundColor: 
      {
        default: 'hsla(0, 100%, 50%,1)',
        ':hover': 'hsla(0, 100%, 50%,0.65)',
        ':active': 'hsla(0, 100%, 50%,1)'
      }
  }
})
import {GDSButton} from 'stylex-component-library';
import * as stylex from '@stylexjs/stylex';
function App() {

  return (
    <>
      <GDSButton {...stylex.props(styles.overrideStyles)}>
        Click Me
      </GDSButton>
    </>
  )
}

export default App

const styles = stylex.create({
  overrideStyles: {
      backgroundColor: '#FF0000',
  }
})
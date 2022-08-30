/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import ContainerAbove from './containers/Container-above/ContainerAbove'
import ContainerExp from './containers/Container-exp/ContainerExp'
import ZapButton from './components/ZapButton/ZapButton'
import StyleButton from './components/outros/StyleButton'

function App () {
  return (
    <div className="App">
      <div className="container-fluid container-main">
      <ContainerAbove />
      <ContainerExp />
      </div>
    <ZapButton />
    <StyleButton />
    </div>
  )
}

export default App

/* eslint-disable no-unused-vars */

import './App.css'
import ContainerAbove from './containers/Container-above/ContainerAbove'
import ContainerExp from './containers/Container-exp/ContainerExp'
import ZapButton from './components/ZapButton/ZapButton'
import StyleButton from './components/StyleButton/StyleButton'
import Context from './context/Context'
import Estilos from './Helpers/Styles'
import React, { useContext, useEffect } from 'react'
import GitButton from './components/GitHubButton/GitHubButton'
import LinkedinButton from './components/LinkedinButton/LinkedinButton'

function App () {
  const { modo } = useContext(Context)

  function MudaCorBody () {
    const body = document.querySelector('body')
    body.style.backgroundColor = Estilos[modo].backgroundColor
  }
  useEffect(() => {
    MudaCorBody()
  }, [])

  return (
    <div className='App' style={Estilos[modo]}>
      <div className="container-fluid container-main">
      <ContainerAbove />
      <ContainerExp />
      </div>
    <div className="container-buttons">
      <ZapButton />
      <StyleButton />
      <GitButton />
      <LinkedinButton />
    </div>

    </div>
  )
}

export default App

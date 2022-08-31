/* eslint-disable no-unused-vars */

import './App.css'
import ContainerAbove from './containers/Container-above/ContainerAbove'
import ContainerExp from './containers/Container-exp/ContainerExp'
import ZapButton from './components/ZapButton/ZapButton'
import StyleButton from './components/StyleButton/StyleButton'
import Context from './context/Context'
import Estilos from './Helpers/Styles'
import React, { useContext, useState } from 'react'
import GitButton from './components/GitHubButton/GitHubButton'

function App () {
  const { modo } = useContext(Context)

  function AnimationOnOrOff () {
    if (modo === 2) {
      return 'anim'
    }
    return ''
  }
  return (
    <div className={AnimationOnOrOff()} style={Estilos[modo]}>
      <div className="container-fluid container-main">
      <ContainerAbove />
      <ContainerExp />
      </div>
    <div className="container-buttons">
      <ZapButton />
      <StyleButton />
      <GitButton />
    </div>

    </div>
  )
}

export default App

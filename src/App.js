/* eslint-disable no-unused-vars */

import './App.css'
import ContainerAbove from './containers/Container-above/ContainerAbove'
import ContainerExp from './containers/Container-exp/ContainerExp'
import ZapButton from './components/ZapButton/ZapButton'
import StyleButton from './components/outros/StyleButton'
import Context from './context/Context'
import Estilos from './Helpers/Styles'
import React, { useContext, useState } from 'react'

function App () {
  const { modo } = useContext(Context)
  console.log(Estilos[modo])
  return (
    <div className="App" style={Estilos[modo]}>
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

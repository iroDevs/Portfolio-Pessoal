import React, { useContext } from 'react'
import Context from '../../context/Context'
import sol from '../../images/sol-icon.png'
import lua from '../../images/lua-icon.png'

import './Style.css'

export default function StyleButton () {
  const { modo, setModo } = useContext(Context)

  function handleClick () {
    console.log('entrei aqui', modo)
    setModo(modo + 1)

    if (modo >= 1) {
      setModo(0)
    }
  }

  function verificaModo () {
    switch (modo) {
      case 0:
        return (
                <img className="bt-style" onClick={handleClick} alt="botão muda estilo da pagina" src={lua}></img>
        )

      case 1:
        return (
                <img className="bt-style" onClick={handleClick} alt="botão muda estilo da pagina" src={sol}></img>
        )

      default:
        return (
                <img className="bt-style" onClick={handleClick} alt="botão muda estilo da pagina" src={lua}></img>
        )
    }
  }
  return (
    <div>{verificaModo()}</div>
  )
}

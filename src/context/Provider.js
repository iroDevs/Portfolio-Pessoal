import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Context from './Context'

export default function Provider ({ children }) {
  const [modo, setModo] = useState(0)
  const contextValue = {
    modo,
    setModo
  }

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node
}.isRequired

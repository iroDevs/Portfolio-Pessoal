/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react'

import './ExperienciaStyle.css'
export default function Experiencia ({ titulo, texto, tecnologia, tempo }) {
  const styleCard = {
    width: '100%',
    height: '100%'
  }
  return (
    <div className="container-exp">
   <div className="card" style={styleCard}>
  <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{tempo}</h6>
    <p className="card-text">{texto}</p>
    <ul className="list-exp">
      {tecnologia.map((item, key) => {
        return (
          <li key={key} className="item-list">{item}</li>
        )
      })}
      </ul>
  </div>
</div>

    </div>

  )
}

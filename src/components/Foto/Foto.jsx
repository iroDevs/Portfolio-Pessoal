import React from 'react'
import './Foto.css'
import MinhaFoto from '../../images/eu.jpeg'
export default function Foto () {
  return (
    <div className=" container-profile-image">
        <h1 className="title-profile display-6">WebDeveloper</h1>
        <img src={MinhaFoto} className="img-profile" alt="minha foto" />
        <span className="hide-desktop lead">
          <p className="display-3">Desenvolvedor Web</p>
          <p className="display-6">
          JavaScript , React , Node , PHP
          </p>
          </span>
    </div>
  )
}

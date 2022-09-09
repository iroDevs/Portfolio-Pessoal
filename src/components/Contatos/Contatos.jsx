import React from 'react'
import './Contatos.css'

export default function Contatos () {
  return (
    <>
    <div className="list-Informacoes hide-mobile">
       <span className="display-3  title-info"> Informações</span>
        <ul className="list">
        <li><span className="lead">Nome: </span>Pedro Henrique Loures Oliveira</li>
        <li><span className="lead">Idade: </span>21 anos</li>
        <li><span className="lead">Ensino: </span>Intituto Federal Rio Pomba , Trybe</li>
        <li><span className="lead">Lingua: </span>English(intermediario) pela EBI </li>
        <li><span className="lead">Cidade: </span>Piraúba-MG cep:36170000</li>
        </ul>

    </div>

    </>
  )
}

import React from 'react'
import jest from '../../images/jest-icon.png'
import js from '../../images/js-icon.png'
import node from '../../images/node-icon.png'
import react from '../../images/react-icon.png'
import php from '../../images/php-icon.png'

import './ListaTecStyle.css'

export default function ListaTec () {
  return (
    <div className="container-tec-list">
        <p className="title-tec">Hard Skill</p>
        <ul className="list-icons">
            <li><img className="img-icons" src={jest} /></li>
            <li><img className="img-icons" src={js} /></li>
            <li><img className="img-icons" src={node} /></li>
            <li><img className="img-icons" src={react} /></li>
            <li><img className="img-icons" src={php} /></li>
        </ul>
    </div>
  )
}

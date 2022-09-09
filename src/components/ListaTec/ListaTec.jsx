import React from 'react'

import './ListaTecStyle.css'

export default function ListaTec () {
  return (
    <div className="container-tec-list">
        <p className="display-5 hide-mobile">Hard Skill</p>

        <ul className="list-tec hide-mobile">
        <li><span className="lead">Jest </span></li>
        <li><span className="lead">JS </span></li>
        <li><span className="lead">React </span></li>
        <li><span className="lead">Node </span></li>
        <li><span className="lead">PHP </span></li>
        </ul>
    </div>
  )
}

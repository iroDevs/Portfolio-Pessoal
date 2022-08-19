import React from 'react'
import Foto from '../../components/Foto/Foto'
import Contatos from '../../components/Contatos/Contatos'
import ListaTec from '../../components/ListaTec/ListaTec'
import './ContainerAboveStyle.css'
export default function ContainerAbove () {
  return (
    <div className="container-fluid container-above">
        <Foto />
        <div className=" container-info">
        <Contatos />
        <div className="container container-profile">
        <ListaTec />
        </div>
        </div>
    </div>
  )
}

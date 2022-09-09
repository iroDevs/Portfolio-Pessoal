import React from 'react'
import Foto from '../../components/Foto/Foto'
import Contatos from '../../components/Contatos/Contatos'
import ListaTec from '../../components/ListaTec/ListaTec'
import ListaSoft from '../../components/ListaSoft/ListaSoft'
import './ContainerAboveStyle.css'
export default function ContainerAbove () {
  return (
    <div className="container-fluid container-above">

        <div className=" container-profile">
        <Foto />
        <ListaTec />
        <ListaSoft />
        <Contatos />
        </div>

    </div>
  )
}

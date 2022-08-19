import React from 'react'
import './Contatos.css'
import { AiOutlineWhatsApp, AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import copy from 'copy-to-clipboard'

export default function Contatos () {
  function copiaTexto ({ target: { innerText } }) {
    console.log(innerText)
    copy(innerText)
    alert('copiado para clipboard')
  }
  return (
    <>
    <div className="list-contatos">
        <li onClick={copiaTexto}>Pedro Henrique Loures Oliveira</li>
        <li onClick={copiaTexto}><AiOutlineMail />pedrohenriquelouresoliveira@gmail.com</li>
        <a target="_blank" href="https://wa.me/5532999359393" rel="noreferrer"><li><AiOutlineWhatsApp />(32) 9 99359393</li></a>
        <a target="_blank" href="https://www.linkedin.com/in/pedro-2001/" rel="noreferrer"> <li><AiFillLinkedin />Linkedin </li></a>
        <a target="_blank" href="https://github.com/iroDevs" rel="noreferrer"> <li><AiFillGithub />gitHub </li></a>
    </div>

    </>
  )
}

import React from 'react'
import { TextoPampa, TextoTrybe, TextoIF } from '../../Helpers/Strings'
import Experiencia from '../../components/Experiencia/Experiencia'

import './ContainerExpStyle.css'

export default function ContainerExp () {
  const experiencia = [
    {
      titulo: 'Pampa Devs',
      texto: TextoPampa,
      tecnologia: ['JavaScript', 'PHP', 'Laravel', 'html', 'css'],
      tempo: '6 meses'

    },
    {
      titulo: 'Trybe',
      texto: TextoTrybe,
      tecnologia: ['JavaScript', 'Reactjs', 'NodeJs', 'SQL e NOSQL'],
      tempo: '1 ano'
    },
    {
      titulo: 'If',
      texto: TextoIF,
      tecnologia: ['html', 'PHP', 'CSS'],
      tempo: '3 anos'
    }
  ]
  return (
    <div className="Container-exp">
        {experiencia.map((value, index) => {
          return (
           <Experiencia key={index} texto={experiencia[index].texto} titulo={experiencia[index].titulo} tempo={experiencia[index].tempo} tecnologia={experiencia[index].tecnologia} />
          )
        })}
    </div>
  )
}

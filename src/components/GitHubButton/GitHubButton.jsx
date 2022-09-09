import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

import './GitHubStyle.css'

export default function GitHubButton () {
  return (
    <>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
    <a href="#" className="bt-git" target="_blank" rel="noreferrer">
    <AiFillGithub />
    </a>
        </>
  )
}

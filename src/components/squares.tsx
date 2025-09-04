import React from 'react'

export default function Squares({title,subtitle,link}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <a href={link}></a>
    </div>
  )
}

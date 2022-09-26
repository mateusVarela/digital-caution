import React from 'react'

export default function InforProblem() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '5px'
      }}
    >
      <p
        style={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: '2rem'
        }}
      >
        Informe o problema:
      </p>
      <textarea
        placeholder="ex: Máquina não liga"
        name=""
        id=""
        cols="60"
        rows="11"
        maxLength={500}
      ></textarea>
    </div>
  )
}

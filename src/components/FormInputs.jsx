import React from 'react'
import { useState } from 'react'
import Buttons from './Buttons'

export default function FormInputs() {
  const [graduation, setGraduation] = useState('')
  const [name, setName] = useState('')
  const [session, setSession] = useState('')
  const [device, setDevice] = useState('')

  const data = {
    graduation,
    name,
    session,
    device
  }

  return (
    <div>
      <input
        onBlur={e => setGraduation(e.target.value)}
        placeholder="Posto/graduação"
        type="text"
      />
      <input
        onBlur={e => setName(e.target.value)}
        placeholder="Nome de guerra"
        type="text"
      />
      <input
        onBlur={e => setSession(e.target.value)}
        placeholder="Sessão"
        type="text"
      />
      <input
        onBlur={e => setDevice(e.target.value)}
        placeholder="Dispositivo"
        type="text"
      />
      <Buttons information={data} />
    </div>
  )
}

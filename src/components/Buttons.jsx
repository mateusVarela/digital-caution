import React from 'react'
import saveCaution from '../service/saveCaution'

export default function Buttons(props) {
  const saveNewCaution = async data => {
    if (!data) return
    const apiAnswer = await saveCaution(data)

    if (apiAnswer) {
      alert('Cadastrado com sucesso.')

      return window.location.reload()
    }
  }

  return (
    <div
      style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
    >
      <button
        onClick={e => saveNewCaution(props.information)}
        className="button caution"
      >
        Cautelar
      </button>
      <button
        onClick={e => (window.location.href = 'http://localhost:3000/list')}
        className="button list"
      >
        Ver lista de cautela
      </button>
    </div>
  )
}

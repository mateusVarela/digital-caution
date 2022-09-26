import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ListCaution from './ListCaution'
import './listCaution.css'

const Content = props => (
  <main className="Content">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/list" element={<ListCaution />} />
    </Routes>
  </main>
)

export default Content

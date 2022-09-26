import React from 'react'
import Content from './components/Content'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

const App = () => (
  <div className="App">
    <Router>
      <Content />
    </Router>
  </div>
)

export default App

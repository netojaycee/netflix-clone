import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing'

export default function App () {
  return (
<>
<Router>
  <Routes>
    <Route path='/' element={<Landing />} />
  </Routes>
</Router>
</>  )
}

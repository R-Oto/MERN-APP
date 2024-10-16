import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/users/Login'
import Register from './pages/users/Register'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
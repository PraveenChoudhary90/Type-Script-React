// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Display from './Pages/Display'
import Coomon from './Coomon/Coomon'
import MuiLaibariy from './Pages/MuiLaibary'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='display' element={<Display/>}/>
      <Route path='coomon' element={<Coomon/>}/>
      <Route path='mui' element={<MuiLaibariy/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

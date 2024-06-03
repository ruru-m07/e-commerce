import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {



  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
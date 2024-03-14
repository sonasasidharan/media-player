import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import  Landing from './Pages/Landing'
import History from './Pages/History'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import Footer1 from'./Components/Footer1'

import { Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      {/* http://localhost:5173/land */}
      <Route path='/' Component={Landing}></Route>
       {/* http://localhost:5173/dash */}
       <Route path='/dash' Component={Dashboard}></Route>
        {/* http://localhost:5173/his */}
        <Route path='/his' Component={History}></Route>
    </Routes>
    <Footer1/>
    </>
  )
}

export default App

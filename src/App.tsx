import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CreateTaskPage } from './pages/create-task'
import { Home } from './pages/home'
import { ViewTaskPage } from './pages/view-task'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/criar-tarefa" element={<CreateTaskPage />} />
      <Route path="/visualizar-tarefa" element={<ViewTaskPage />} />

    </Routes>
  )

}



export default App

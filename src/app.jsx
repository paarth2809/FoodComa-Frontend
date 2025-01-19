import { Route, Routes } from 'react-router-dom'
import './app.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home'

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
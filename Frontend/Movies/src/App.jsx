
import './App.css'
import Login from './components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Registration from './components/Registration'
import HomePage from './components/HomePage'



function App() {

  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={ <HomePage/>}/>
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App

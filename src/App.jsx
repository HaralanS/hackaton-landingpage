import { useState } from 'react'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Diversidade from './components/Diversidade'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='  md:hidden flex absolute right-2 top-2 cursor-pointer border-gradient'>menu</div>
    <Header />
    <Sobre/>
    <Diversidade/>
      
    </>
  )
}

export default App

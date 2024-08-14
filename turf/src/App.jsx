import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import SlidingCards from './components/SlidingCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SlidingCards/>
      <Home/>
      
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import SlidingCards from './components/SlidingCards'
import MainContainer from './components/MainContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainContainer/>
      <div className="pt-24">
      <SlidingCards/>
      </div>
      <Home/>
    </>
  )
}

export default App

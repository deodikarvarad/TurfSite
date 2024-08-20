
import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import SlidingCards from './components/SlidingCards'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
import About from './About'
import CardBox from './components/CardBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainContainer/>
      <div className="pt-24">
      <SlidingCards/>
      </div>
      <Home/>
      <div className="pb-24"><CardBox/></div>
      
      <div className="pb-24"><About/></div>
      
      <Footer/>
      
    </>
  )
}

export default App

import React from 'react'
import Home from './components/Home'
import Sales from './components/Sales'
import FlexContent from './components/FlexContent'
import { heroapi,popularsales,footerAPI,toprateslaes,sneaker,highlight,story } from './data/data'
import { Stories } from './components'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <main className='flex flex-col gap-16 relative'>
      <Home heroapi= {heroapi}/>
      <Sales endpoint={popularsales} ifExists />
      < FlexContent endpoint={highlight}  ifExists/>
      <Sales endpoint={toprateslaes}/>
      <FlexContent endpoint={sneaker}/>
      <Stories story={story}/>
      </main> 
      <Footer footerAPI={footerAPI}/>  
    </div>
  )
}

export default App
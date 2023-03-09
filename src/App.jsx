import React from 'react'
import Home from './components/Home'
import Sales from './components/Sales'
import FlexContent from './components/FlexContent'
import { heroapi,popularsales,toprateslaes,sneaker,highlight,story } from './data/data'
import { Stories } from './components'

function App() {
  return (
    <div>
      <main className='flex flex-col gap-16 relative'>
      <Home heroapi= {heroapi}/>
      <Sales endpoint={popularsales} ifExists />
      < FlexContent endpoint={highlight}  ifExists/>
      <Sales endpoint={toprateslaes}/>
      <FlexContent endpoint={sneaker}/>
      <Stories story={story}/>
      </main>  
    </div>
  )
}

export default App
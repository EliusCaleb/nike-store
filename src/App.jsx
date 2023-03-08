import React from 'react'
import Home from './components/Home'
import Sales from './components/Sales'
import { heroapi,popularsales,toprateslaes } from './data/data'

function App() {
  return (
    <div>
      <main className='flex flex-col gap-16 relative'>
      <Home heroapi= {heroapi}/>
      <Sales endpoint={popularsales} />
      <Sales endpoint={toprateslaes}/>
      </main>
       
    </div>
  )
}

export default App
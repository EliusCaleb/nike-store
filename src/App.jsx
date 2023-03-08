import React from 'react'
import Home from './components/Home'
import { heroapi } from './data/data'

function App() {
  return (
    <div>
      <main>
      <Home heroapi= {heroapi}/>
      </main>
       
    </div>
  )
}

export default App
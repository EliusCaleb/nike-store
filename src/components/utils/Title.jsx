import React from 'react'

function Title({title}) {
  return (
    <>
        <div className=' grid items-center'>
            <h1 className='text-6xl lg:text-5xl md:text-4xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
        </div>
    </>
  )
}

export default Title
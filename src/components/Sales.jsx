import React from 'react'
import Product from './utils/Product'
import Title from './utils/Title'

function Sales({endpoint:{title,items} }) {
   
  return (
    <>
      <div className='nike-container'>
        <Title title={title}/>
        <div className='grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7'>
            { items?.map((item,index) =>(
               <Product {...item} key={index}/>
            ))}
           
        </div>
      </div>
    </>
  )
}

export default Sales
import React from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'


function CartCount({onCartToggle, onClearCartItem}) {
  return (
    <>
        <div className='bg-white flex items-center justify-between h-11 w-full sticky top-0 right-0 left-0 px-3'>
            <div className='flex items-center gap-3'>
                <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
                    <ChevronDoubleLeftIcon 
                    className='w-5 h-5  text-slate-900 hover:text-orange-700 stroke-[2]'/>
                </div>
                <div>
                    <h1 className='text-base font-medium text-slate-900'>Your Cart <span className='bg-theme-cart text-slate-100 rounded px-1 py-0.5 font-normal'>(Item)</span></h1>
                </div>
            </div>
            <div>
                <button type='button' className='bg-theme-cart p-0.5 active:scale-90 ' onClick={onClearCartItem}>
                    <XMarkIcon className='w-5 h-5 text-white stroke-[2]'/>
                </button>
            </div>
        </div>
    
    </>
  )
}

export default CartCount
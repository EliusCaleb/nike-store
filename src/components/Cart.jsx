import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectCartState,setCloseCart } from '../app/CartSlice'
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'

function Cart() {
  const dispatch = useDispatch()
  const ifCartState = useSelector(selectCartState)
    const onCartToggle =()=>{
         dispatch(setCloseCart({
            cartState:false
         }))
    }
  return (
    <> 
    <div className={`fixed blur-effect-theme top-0 right-0 left-0 w-full  h-screen opacity-100 z-[250] ${ifCartState ? 'opacity-100 visible translate-x-0':'opacity-0 invisible translate-x-8'}`}>
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
            <CartCount onCartToggle={onCartToggle}/>
            <CartEmpty/>
            <CartItem/>
        </div>
    </div>

    </>
  )
}

export default Cart
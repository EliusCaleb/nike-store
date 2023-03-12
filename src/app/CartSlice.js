import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    cartState: false,
    cartItem:[]
}

const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers:{
        setOpenCart:(state, action)=>{
           state.cartState = action.payload.cartState
        },
        setCloseCart:(state,action) =>{
            state.cartState = action.payload.cartState
        },
        setAddItemsToCart: (state,action) =>{
            state.cartItem.push(action.payload)
        }
    }
})

export const{ setOpenCart,setCloseCart} = CartSlice.actions;
export const selectCartState =(state)=> state.cart.cartState
export default CartSlice.reducer;
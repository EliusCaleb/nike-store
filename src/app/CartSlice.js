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
            const itemIndex = state.cartItem.findIndex((item)=>
             item.id===action.payload.id);
            
            if(itemIndex >=0){
                state.cartItem[itemIndex].cartQuantity += 1;
            }else {
            const temp =  {...action.payload, cartQuantity: 1}
            state.cartItem.push(temp)}
        }
    }
})

export const{ setOpenCart,setCloseCart,setAddItemsToCart} = CartSlice.actions;
export const selectCartState =(state)=> state.cart.cartState
export default CartSlice.reducer;
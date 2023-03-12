import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast'

const initialState  = {
    cartState: false,
    cartItem:localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): []
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
                toast.success(`Items QTY increased`);
            }else {
            const temp =  {...action.payload, cartQuantity: 1}
            state.cartItem.push(temp)
            
            toast.success(`${action.payload.title} added to Cart`);
            };

            localStorage.setItem('cart', JSON.stringify(state.cartItem));
        }
    }
})

export const{ setOpenCart,setCloseCart,setAddItemsToCart} = CartSlice.actions;
export const selectCartState =(state)=> state.cart.cartState;
export const selectCartItem = (state) => state.cart.cartItem;
export default CartSlice.reducer;
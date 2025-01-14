import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity : 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        addToCart(state, action) {
          const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
          if(itemIndex >= 0){
            state.cartItems[itemIndex].cartQuantity += 1;
            toast.info(`Increased ${state.cartItems[itemIndex].title} quantity`, {
                position: "bottom-left"
            })
          } else{
            const tempProduct = {...action.payload, cartQuantity: 1}
            state.cartItems.push(tempProduct)  
            toast.success(`Added ${action.payload.title} to cart`, {
                position: "bottom-left"
            })
          }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action){
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.warning(`Removed ${action.payload.title} from cart`, {
                position: "bottom-left"
            })
        },
        decreaseQuantity(state, action){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`Decreased ${action.payload.title} cart quantity`, {
                    position: "bottom-left"
                })
            } else if(state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems;
                toast.warning(`Removed ${action.payload.title} from cart`, {
                    position: "bottom-left"
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearCart(state, action){
            state.cartItems = [];
            toast.warning(`Cart cleared`, {
                position: "bottom-left"
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        getTotal(state, action){
           let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
            const {price, cartQuantity} = cartItem;
            const itemTotal = price * cartQuantity;

            cartTotal.total += itemTotal
            cartTotal.quantity += cartQuantity
            
            return cartTotal;
           }, 
           {
            total:0,
            quantity:0
           });
           state.cartTotalQuantity = quantity;
           state.cartTotalAmount = total; 
        }
    }
})

export const {addToCart, removeFromCart, decreaseQuantity, clearCart, getTotal} = cartSlice.actions
export const selectCartItems = (state) => state.cart
export default cartSlice.reducer;
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, decreaseQuantity, getTotal, removeFromCart, selectCartItems } from '../cartSlice'
import { Link } from 'react-router-dom';

import "../main.css"

const Cart = () => {
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch])

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  }

  const handleDecreaseCartQuantity = (cartItem) => {
    dispatch(decreaseQuantity(cartItem));
  }

  const handleIncreaseCartQuantity = (cartItem) => {
    dispatch(addToCart(cartItem));
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      {
        cart.cartItems.length === 0 ? 
          (
            <div className='cart-empty'>
              <p>Your cart is currently empty</p>
              <div className='start-shopping'>
                <Link to ="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                  </svg>
                  <span> Start Shopping</span>
                </Link>
              </div>
            </div>
          )
          : (
            <div>
              <div className='titles'> 
                <h3 className='product-title'>Product</h3>
                <h3 className='price'>Price</h3>
                <h3 className='quantity'>Quantity</h3>
                <h3 className='total'>Total</h3>
              </div>
              <div className='cart-items'>
                {cart.cartItems?.map(item => (
                  <div className='cart-item' key={item.id}>
                    <div className='cart-product'>
                      <img src={item.thumbnail} alt='image' />
                      <div>
                        <p>{item.title}</p>
                        <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                      </div>
                    </div>
                    <div className='cart-product-price'>
                      ${item.price}
                    </div>
                    <div className='cart-product-quantity'>
                      <button onClick={() => handleDecreaseCartQuantity(item)}> - </button>
                      <div className='count'> {item.cartQuantity}</div>
                      <button onClick={() => handleIncreaseCartQuantity(item)}> + </button>
                    </div>
                    <div className='cart-product-total-price'>
                      ${item.price * item.cartQuantity}
                    </div>
                  </div>
                ))}             
              </div>
              <div className='cart-summary'>
                <button className='clear-cart' onClick={() => handleClearCart()}>Clear Cart</button>
                <div className='cart-checkout'>
                  <div className='subtotal'>
                    <span>Subtotal</span>
                    <span className='amount'>${cart.cartTotalAmount}</span>
                  </div>
                  <p>Taxed and shipping calculated at checkout</p>
                  <button>Check out</button>
                  <div className='continue-shopping'>
                    <Link to ="/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                      </svg>
                      <span> Continue Shopping</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
           )
        }
    </div>
  )
}

export default Cart
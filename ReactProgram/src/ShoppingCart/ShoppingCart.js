import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
import { reducer } from './reducer';
import Product from './Product';
import Cart from './Cart';

export default function ShoppingCart() {

  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
  });

  console.log(state)

  const fetchProducts = async () => {
    const {data} = await axios.get('https://dummyjson.com/products');
    
    dispatch({
        type:"ADD_PRODUCTS",
        payload: data.products,
    });

  }

  useEffect(() => {
    fetchProducts();
  },[])


  return (
    <div style={{display: 'flex'}}>
        <Product state={state} dispatch={dispatch}/>
        <Cart state={state} dispatch={dispatch}/>
    </div>
  )
}

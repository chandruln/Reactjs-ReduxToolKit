import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsError, getProductsStatus, selectAllProducts } from '../productSlice'

import "../main.css"
import { addToCart } from '../cartSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allProducts = useSelector(selectAllProducts);
  console.log("allProducts", allProducts);
  const status = useSelector(getProductsStatus);
  const error = useSelector(getProductsError);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart")
  }

  return (
    <div className='home-container'>
      {error ? (<p>An Error Occured ...</p>) : (
        <>
          <h2>New Arrivals</h2>
          <div className='allproducts'>
            {
              allProducts.map(product => (
                <div key={product.id} className="product">
                  <h3>{product.title}</h3>
                  <img src={product.thumbnail} alt="image"/>
                  <div className='details'>
                    <span>{product.description}</span>
                    <span className='price'>${product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                </div>
              ))
            }
          </div>
        </>
      )}
    </div>
  )
}

export default Home
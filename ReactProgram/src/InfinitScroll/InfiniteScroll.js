import React, { useEffect, useState } from 'react'
import DisplayProduct from './DisplayProduct'
import './index.css'

const InfiniteScroll = () => {

    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=6&skip=${page*6-6}`)
        .then(res => res.json())
        .then(data => 
            setProducts((prev) => [...prev, ...data.products]),
        )
    },[page])

    useEffect(() => {
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[])

    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            setPage(prev => prev + 1)
        }
    }

  return (
    <div>
        { products && products.map((product) => 
           (
            <div className='products'>
                <DisplayProduct product={product} />
            </div>
            )
        )}
    </div>
  )
}

export default InfiniteScroll
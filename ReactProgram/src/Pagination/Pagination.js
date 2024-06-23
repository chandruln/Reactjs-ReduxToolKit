import React, { useState, useEffect } from 'react'
import './style.css'

export default function Pagination() {

    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const fetchProducts = async () => {
        //const res = await fetch(`https://dummyjson.com/products?limit=100`)
        const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`)
        const data = await res.json()
        console.log(data);
        
        if(data && data.products){
            setProducts(data.products) 
            setTotalPages(Math.ceil(data.total/10))
        }
        
    }

    useEffect(() => {   
        fetchProducts()
    },[page])

    return (
        <div> 
            {
                products.length > 0 && 
                <div className='products'> 
                    {
                        //products.slice( page * 10 - 10,page * 10).map((product, index) => {
                        products.map((product, index) => {
                            return (
                                <span className='products__single' key={product.id}> 
                                    <img src={product.thumbnail} alt={product.title} />
                                    <span>{product.title}</span>
                                </span>
                            )
                        })
                    }
                </div>
            }
            
            
            <h4 style={{color:"red", textAlign:"center"}}> Pagination Single Page </h4>
            {
                products.length > 0 && 
                <div className='pagination'>
                    <span onClick={() => setPage(page - 1)} >&laquo;</span>
                    <span onClick={() => setPage(1)}>{page}</span>
                    <span onClick={() => setPage(page + 1)}>&raquo;</span>
                </div>
            }


            <h4 style={{color:"red", textAlign:"center"}}> Pagination Array </h4>
            {
                products.length > 0 && 
                <div className='pagination'>    
                    <span 
                        onClick={() => setPage(page - 1)} 
                        className={page > 1 ? '' : 'pagination__disable'}
                    >&laquo;</span>
                     {
                        [...Array(totalPages)].map((_, index) => {
                            return <span key={index} 
                                    onClick={() => setPage(index + 1)}
                                    className={page === index + 1 ? 'pagination__selected' : ''}
                                    >
                                        {index + 1}
                                    </span>
                        })
                    }
                    <span 
                        onClick={() => setPage(page + 1)}
                        className={page < totalPages ? '' : 'pagination__disable'}
                    >&raquo;</span>
                </div>
            }
        </div>
        
    );
}

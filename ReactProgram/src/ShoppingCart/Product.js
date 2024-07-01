import React from 'react'

const Product = ({state, dispatch}) => {

  const {products, cart} = state;
  console.log(products)
  return (
    <div 
        style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly", 
            width: "80%", 
        }}>
        {products.map((item) => (
            <div 
                key={item.id}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #d3d3d3",
                    borderRadius: 5,
                    margin: 10,
                    padding: 10,
                    width: "30%",
                }}>
                <img src={item.thumbnail} alt={item.title} 
                    style={{height:200, objectFit: "cover"}}
                />
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <span>{item.title}</span>
                    <b> ${item.price}</b>
                </div>
                {
                    cart.some((i) => i.id === item.id) ? 
                        <button
                            onClick={() => {
                                dispatch({
                                    type: "Remove_FROM_CART",
                                    payload: item.id,
                                });
                            }}
                            style={{
                                backgroundColor: "grey",
                                color: "white",
                                marginTop: 10,
                                padding: 5,
                                border: "none",
                                borderRadius: 5,
                                cursor: "pointer",
                            }}
                        >
                            Remove from Cart
                        </button> 
                    :   <button
                            onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: {
                                        id: item.id,
                                        title: item.title,
                                        price: item.price,
                                        thumbnail: item.thumbnail,
                                        qty: 1,
                                    }
                                });
                            }}
                            style={{
                                backgroundColor: "orange",
                                color: "white",
                                marginTop: 10,
                                padding: 5,
                                border: "none",
                                borderRadius: 5,
                                cursor: "pointer",
                            }}
                        >
                            Add to Cart
                        </button>
                } 
            </div>
        ))}
        
    </div>
  )
}

export default Product
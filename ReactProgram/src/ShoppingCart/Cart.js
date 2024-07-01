import React, { useEffect } from 'react'

const Cart = ({state, dispatch}) => {
    const {cart} = state;
    const [total, setTotal] = React.useState(0);

    const changeQty = (id, qty) => {
        dispatch({
            type: "CHANGE_CART_QTY",
            payload: {
                id,
                qty,
            }
        })
    }

    useEffect(() => {
        setTotal(cart.reduce((acc, item) => acc + Number(item.price) * item.qty, 0))
    },[cart])

  return (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            margin: 10,
            backgroundColor: "#ececec",
            padding: 10,
            width: "20%", 
        }}>
        <b style={{fontSize:"30px", alignSelf:"center", color:"green"}}>Cart</b>
        <b style={{alignSelf:"center"}}>Subtotal: ${total}</b>
        {
            cart.length > 0 ? 
            <>
                <div>
                    {cart.map((item) => (
                        <div 
                            key={item.id}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                border: "1px solid #d3d3d3",
                                padding: 10,
                                margin: 3
                            }}
                        >
                            <div style={{display: "flex", gap:10}}>
                                <img src={item.thumbnail} alt={item.title} style={{width:70, objectFit:"cover"}}/>
                                <div style={{display: "flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                                    <span>{item.title}</span>
                                    <b>${item.price}</b>
                                </div>
                            </div>
                            <div style={{display:"flex", alignItems:"center", gap:10}}>
                                <button onClick={() => changeQty(item.id, item.qty - 1)}>-</button>
                                <span>{item.qty}</span>
                                <button onClick={() => changeQty(item.id, item.qty + 1)}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
            </>
            : <span style={{padding:20, alignSelf:"center"}}>Cart is Empty</span>
        }
        </div>
  )
}

export default Cart
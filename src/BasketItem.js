import React from 'react'

const BasketItem = ({order, incQuantity, decrQuantity, removeOrder}) => {
 
  return (
    <div className='BasketItem'>
      <span>{order.title}</span>
      <button onClick = {()=>decrQuantity(order.id)}>-</button>
      <span>{order.quantity}</span>
      <button onClick = {()=>incQuantity(order.id)}>+</button>
      <span>=</span>
      <span>{order.price*order.quantity}</span>
      <img src={order.imgUrl} width = "25px" height = "25px"></img>
      <span onClick = {()=>removeOrder(order.id)}>&times;</span>

    </div>
  )
}

export default BasketItem
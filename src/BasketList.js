import React from 'react';
import BasketItem from './BasketItem';

const BasketList = ({orders, incQuantity, decrQuantity, removeOrder, handleBasketShow}) => {
 
  const totalPrice = orders.reduce((aggr, order)=> {
              return aggr + order.quantity * order.price;
  },0)

  return (
    <div className='BasketList'>
      <span className='Close' onClick = {()=>handleBasketShow()}>X</span>
      <h2>Cart</h2>
      {
        orders.map(order => {
          return <BasketItem key={order.id} order={order} incQuantity = {incQuantity} decrQuantity = {decrQuantity} removeOrder = {removeOrder}/>
        })
      }
      <h2>Total Price : {totalPrice}</h2>

    </div>
  )
}

export default BasketList
import React from 'react'

const GoodItem = ({good, addToBasket}) => {
  
  return (
    <div>
        <h4>{good.id}</h4>
        <h4>{good.title}</h4>
        <h4>{good.descr}</h4>
        <img src={good.imgUrl}></img>
        <button onClick={()=> addToBasket({
          id :good.id,
          title : good.title,
          price : good.price,
          imgUrl : good.imgUrl
        })} >Add To Cart</button>
    </div>
  )
}

export default GoodItem
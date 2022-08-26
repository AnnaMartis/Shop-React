import React from 'react'
import GoodItem from './GoodItem'

const GoodList = ({goods, addToBasket}) => {

    if(!goods.length) return <h2>Nothing is here</h2>
    
  return (
    <div className='GoodList'>
        {
            goods.map((good, index) => {
                return <GoodItem key={index} good = {good} addToBasket = {addToBasket}/>
            })

        }
    </div>
  )
}

export default GoodList
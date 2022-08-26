import {useState, useEffect} from 'react';
import GoodList from './GoodList';
import BasketList from './BasketList';
import BasketItem from './BasketItem';


const App = () => {

  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  useEffect(()=> {
    fetch("http://localhost:3000/goods")
            .then(response => response.json())
            .then(json => setGoods(json))
  }, [])


  const addToBasket = (item) => {
    const itemIndex = orders.findIndex(el => el.id == item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity : 1
      }
      setOrders([...orders, newItem])
    } else {
      const newOrder = [...orders];
      newOrder[itemIndex].quantity++;
      setOrders(newOrder)

    }
  }


  const removeOrder = (id) => {
    const newOrder = orders.filter(item => item.id !== id)
    setOrders(newOrder)
  }

  const incQuantity = (id) => {
    const newOrder = orders.map(el => {
      if(el.id == id) el.quantity++;
      return el
    })
    setOrders(newOrder);
  }

  
  const decrQuantity = (id) => {
    const newOrder = orders.map(el => {
      if(el.id == id) el.quantity = el.quantity>1 ? el.quantity = el.quantity - 1 : 1;
      return el;
    })
    setOrders(newOrder);
  }


  const handleBasketShow = ()=> {
    setBasketShow (!isBasketShow);
  }

  return (
    <div className='App'>
      <button onClick = {handleBasketShow}>CART</button>
        {
          isBasketShow &&  <BasketList orders = {orders}  incQuantity = {incQuantity} decrQuantity = {decrQuantity} removeOrder = {removeOrder} handleBasketShow = {handleBasketShow}/>
        }
        <GoodList goods = {goods}  addToBasket = {addToBasket}/>
    </div>
  )
}

export default App
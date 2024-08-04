import React,{useState} from 'react'

export const Cart = () => {
    const [cartCount,setCartCount] = useState(0);
    const hadleClick = ()=>{
       setCartCount(cartCount +=1);
    }
  return (
    <>
     <h1>Number of items in the cart {cartCount} <span>hiii</span></h1>
     <button onClick={hadleClick}>Add to cart</button>
    </>
  )
}

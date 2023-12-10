// import React from 'react'
// import { addtoCart, removeFromCart } from '../functions/cart'
// import { useEffect, useState } from 'react'
// function CartAmountToggle({k, cartData}) {
//   const [count, setCount]=useState(0)
//   useEffect(() => {
//     console.log("use effect from cart hi");
//     cartData[k].qty
//   //   }
//   }, [count]);
//   const handleClick = () =>{
//     setCount((prev)=> prev + 1)
//   }
//   return (
//     <div className="flex space-x-2">
//     <button className="text-blue-500 font-bold" onClick={() => removeFromCart(k,1 )}><p onClick={()=>handleClick}>-</p></button>
//     <span>{cartData[k].qty}</span>
//     <button className="text-blue-500 font-bold" onClick={() => addtoCart(k, 1, cartData[k].price, cartData[k].productName, cartData[k].image)}><p onClick={handleClick}>+</p></button>
//   </div>
//   )
// }

// export default CartAmountToggle
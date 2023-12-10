"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from 'next/link';
import CartLayout from "../components/CartLayout";
import { SubTotal, clearCart } from "../functions/cart";
function page() {
  // const [Cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("use effect from cart hi");

  //   try {
  //     if (localStorage.getItem("cart")) {
  //       setCart(JSON.parse(localStorage.getItem("cart")));
  //       saveCart(JSON.parse(localStorage.getItem("cart")))
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     localStorage.clear();
  //   }
  // }, []);
  // const saveCart = (myCart) => {
  //   localStorage.setItem("cart", JSON.stringify(myCart));
  //   let subt = 0;
  //   let keys = Object.keys(myCart);
  //   for (let i = 0; i<keys.length; i++) {
  //     subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty;
  //   }
  //   setSubTotal(subt);
  // };
  // const addtoCart = (itemCode, qty, price, productName, image) => {
  //   let newCart = Cart;
  //   if (itemCode in Cart) {
  //     newCart[itemCode].qty = Cart[itemCode].qty + qty;
  //   } else {
  //     newCart[itemCode] = {
  //       qty: qty,
  //       price: price,
  //       productName: productName,
  //       image: image,
  //     };
  //   }
  //   setCart(newCart);
  //   saveCart(newCart);
  // };
  // const clearCart = () => {
  //   setCart({});
  //   saveCart({});
  // };
  // const removeFromCart = (itemCode, qty) => {
  //   let newCart = Cart;
  //   if (itemCode in Cart) {
  //     newCart[itemCode].qty = Cart[itemCode].qty - qty;
  //   }
  //   if (newCart[itemCode].qty <= 0) {
  //     delete newCart[itemCode];
  //   }
  //   setCart(newCart);
  //   saveCart(newCart);
  // };

  useEffect(() => {
      console.log("use effect from cart hi");
      // let newCart = JSON.parse(localStorage.getItem('cart')) || {};
      // let subTotal = 0;
      // let keys = Object.keys(newCart);
      // for (let i = 0; i<keys.length; i++) {
      //   subTotal += newCart[keys[i]]["price"] * newCart[keys[i]].qty;
      // }
      // let subt = subTotal.toFixed(2)
      // setSubTotal(subt);
    //   }
    }, [clearCart, SubTotal]);

    const handleClick = () => {
      setCount((prev) => prev + 1);
    };
  return (
    <div className="text-gray-200 ">
      <CartLayout />
      <div className="flex justify-between m-20">
      <button id="btnClearCart" class="inline-flex  items-center font-medium text-indigo-700 hover:text-white hover:bg-red-500 bg-indigo-100 border-0 py-1 px-2 focus:outline-none rounded text-base mt-4 md:mt-0" onClick={clearCart}>
  Clear Cart
</button>
<div>
      <button id = "btnCheckout" class="inline-flex font-medium text-violet-800  items-center hover:text-indigo-600  bg-gray-900 border-0 py-3 px-2 focus:outline-none rounded text-base mt-4 md:mt-0"> 
        <a   className=" flex flex-row" href="/Checkout">
        Checkout  

  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag ml-2 mt-1" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
<p className="text-gray-600 mx-3">@ ${SubTotal()}</p>  
  </a>
</button>
</div>
</div>
      </div>

  );
}

export default page;

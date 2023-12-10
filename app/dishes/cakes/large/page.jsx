"use client";
// pages/menu.js
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import menuData from "../../../data/menuData";
// import  addtoCart from '@function/cart'
import { addtoCart, removeFromCart } from "@/app/functions/cart";
// import { getQty } from '@/app/functions/cart';
function MenuPage() {
  const largeCakes = menuData.largeCakes || [];

  // Initialize state with an empty object
  const [cartitem, setCartitem] = useState({});

  useEffect(() => {
    // Check if window is defined before accessing localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
    if (typeof window !== "undefined") {
      // Retrieve cart items from localStorage when the component mounts
      
      // setCartitem(storedCart);

    }
    setCartitem((prevCart) => {
      console.log("hi",JSON.stringify(prevCart) !== JSON.stringify(storedCart))
      // Use a callback to avoid unnecessary re-renders
      if (JSON.stringify(prevCart) !== JSON.stringify(storedCart)) {
        return storedCart;
      } 
      return prevCart;
    });
  
  }, []);
  // const desserts = menuData.desserts; // Access the desserts category
  // console.log(menuData);
  //  const getQty = (itemCode) => {
  //     let newCart = JSON.parse(localStorage.getItem('cart')) || {};
  //     if (itemCode in newCart) {
  //         console.log(newCart[itemCode].qty)
  //       return newCart[itemCode].qty;
  //     } else {
  //       return 0;
  //     }
  //   }
  const isRemoveDisabled = (qty) => {
    
    return qty <= 0;
  };


  return (
    <div>
      <Head>
        <title>Restaurant Menu </title>
      </Head>

      {/* //Large cakes */}
      <h1 className="text-3xl font-semibold mb-4 mx-12 mt-12 text-violet-700">
        Restaurant Menu for large sized cakes{" "}
      </h1>
      <span className="mx-12 text-gray-700">
        Total menu items {largeCakes.length}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {largeCakes.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-4 shadow-2xl shadow-cyan-500/50 m-8 opacity-100"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-24 object-cover mb-2"
            />
            <h2 className="text-xl text-violet-700 font-semibold mb-2">
              {item.name}
            </h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <div className="mt-2 flex justify-between items-center">
              <div className="flex space-x-2">
                {/* <button
                  className={`text-blue-500 font-bold ${
                    isRemoveDisabled(cartitem[item.id] ? cartitem[item.id].qty : 0) ? "disabled cursor-not-allowed" : ""
                  } `}
                  onClick={() => removeFromCart(item.id, 1)}
                  disabled={isRemoveDisabled(cartitem[item.id] ? cartitem[item.id].qty : 0)}
                >
                  
                    -
                 
                </button> */}
                {/* <span id={`${cartitem[item.id] ? cartitem[item.id].qty : 0}`}>
                  {cartitem[item.id] ? cartitem[item.id].qty : 0}
                </span> */}
                {/* <span>Add to Cart</span> */}
                <button
                  className="text-blue-500 font-bold"
                  onClick={() =>
                    addtoCart(item.id, 1, item.price, item.name, item.image)
                  }
                >
                  Add to Cart{addtoCart}
                </button>
                <a href="/Checkout">
                <button
                  className="text-blue-500 font-bold"
                  onClick={() =>
                    addtoCart(item.id, 1, item.price, item.name, item.image)
                  }
                >
                 
                  Buy Now{addtoCart}
                </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;

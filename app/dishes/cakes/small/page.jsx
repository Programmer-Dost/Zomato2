"use client"
// pages/menu.js
import Head from "next/head";
import Link from "next/link";
import menuData from "../../../data/menuData";
import { useState, useEffect } from "react";
import { addtoCart, removeFromCart } from "@/app/functions/cart";
function MenuPage() {
  // const desserts = menuData.desserts; // Access the desserts category
  const smallCakes = menuData.smallCakes || [];
  const largeCakes = menuData.largeCakes || [];
  // console.log(menuData);
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
      console.log(
        "hi",
        JSON.stringify(prevCart) !== JSON.stringify(storedCart)
      );
      // Use a callback to avoid unnecessary re-renders
      if (JSON.stringify(prevCart) !== JSON.stringify(storedCart)) {
        return storedCart;
      }
      return prevCart;
    });
  }, []);
  return (
    <div>
      <Head>
        <title>Restaurant Menu </title>
      </Head>
      <h1 className="text-3xl font-semibold mb-4 mx-12 text-violet-700">
        Restaurant Menu for small sized cakes{" "}
      </h1>
      <span className="mx-12 text-gray-700">
        Total menu items {smallCakes.length}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {smallCakes.map((item) => (
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
                {/* <button className="text-blue-500 font-bold">-</button>
                <span>0</span>
                <button className="text-blue-500 font-bold">+</button> */}

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

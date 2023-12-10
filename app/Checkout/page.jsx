"use client";
import React from "react";
import CartLayout from "../components/CartLayout";
import "../globals.css";
import { useState, useEffect } from "react";
import { addtoCart, removeFromCart, SubTotal } from "../functions/cart";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import getStripe from "@/lib/getStripe";
import { UserContext } from "../Context/UserProvider";
var jwt = require("jsonwebtoken");
// import CartAmountToggle from '../components/CartAmountToggle';
function page() {
  const router = useRouter()
  const [cartData, setcartData] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [count, setCount] = useState(0);
  const { loggedIn, login, logout, user } = React.useContext(UserContext);
  const [decoded, setDecoded] = useState({});
  console.log("cartdata", JSON.stringify(cartData))
  let userEmail = decoded.Email
  console.log("user", userEmail)
  // var result = [];

// for(var i in cartData) {
//     result.push([i, cartData [i]]);
// }
// console.log(result,"result")
console.log("cartdata", JSON.stringify(cartData))
  const initiatePayment = async()=>{
    const stripe = await getStripe()
    try
    {const response = await fetch('api/stripe', {
      method:'POST',
      headers:{
        "Content-Type": "application/json",

      },
      body: JSON.stringify({cartData, userEmail}),
      
    })
    toast.loading("Redirecting...")
    let res = await response.json()
    console.log(res)
    stripe.redirectToCheckout({
      sessionId:res.id
    })
    
  
  }catch(e){console.log(e)}
}
    // if(response.statusCode === 500) {
    //   console.log(err)
    //   return};

    // console.log(response, "response")
    // const data = await response.json()
    
    // console.log("data: ", data)
    // console.log(response.body.id, "response.id")
    // const realJson = await JSON.parse(data)
   

    useEffect(() => {
    console.log("use effect from cart hi");
    if (loggedIn) {
      let decodedToken = jwt.decode(user.value)
      console.log("decoded token", decodedToken)
       setDecoded(decodedToken);
     }
if(localStorage.getItem("token")){
  console.log("user verified")
}else{
  router.push("/login")
}
    try {
      if (localStorage.getItem("cart")) {
        setcartData(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, [count, loggedIn]);

  

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  // var cartProducts = 1;

  // console.log(cartData);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
  };
const Subtotal = SubTotal()
console.log(Subtotal)
  function CartAmountToggle({ k, cartData }) {
    // const [count, setCount]=useState(0)
    // useEffect(() => {
    //   console.log("use effect from cart hi");
    //   cartData[k].qty
    // //   }
    // }, [count]);
    // const handleClick = () =>{
    //   setCount((prev)=> prev + 1)
    // }
    return (
      <div className="flex space-x-2">
        <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/></Head>
        <button
          className="text-blue-500 font-bold"
          onClick={() => removeFromCart(k, 1)}
        >
          <p onClick={handleClick}>-</p>
        </button>
        <span>{cartData[k].qty}</span>
        <button
          className="text-blue-500 font-bold"
          onClick={() =>
            addtoCart(
              k,
              1,
              cartData[k].price,
              cartData[k].productName,
              cartData[k].image
            )
          }
        >
          <p onClick={handleClick}>+</p>
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* {Object.keys(cartData).length===0 && <div>No items in the cart</div>}
      {Object.keys(cartData).map((k) => {
        return <li key={k}>
          
          
          <div
            // key={item.id}
            className="bg-white rounded-xl p-4 shadow-2xl shadow-cyan-500/50 m-8 opacity-100"
          >
            <img
              src={cartData[k].image}
              alt={cartData[k].productName}
              className="w-full h-24 object-cover mb-2"
            />
            <h2 className="text-xl text-violet-700 font-semibold mb-2">
              {cartData[k].productName}
            </h2>
            <p className="text-gray-600">{cartData[k].price}</p>
            {/* <p className="text-gray-600">${cartData[k].price.toFixed(2)}</p> */}
      {/* <div className="mt-2 flex justify-between items-center">
{cartData[k].image}: image url
              <div className="flex space-x-2">
                <button className="text-blue-500 font-bold" onClick={() => removeFromCart(k,1 )}>-</button>
                <span>{cartData[k].qty}</span>
                <button className="text-blue-500 font-bold" onClick={() => addtoCart(k, 1, cartData[k].price, cartData[k].productName, cartData[k].image)}>+</button>
              </div>
            </div>
          </div>
          
          
          </li>;
      // })} */}
      {/* <CartLayout />
      <p className="text-gray-600">Hi ${SubTotal()}</p>  */}

      {Object.keys(cartData).length === 0 && <p>No items in the cart</p>}
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product
              </th>
              <th scope="col" class="px-6 py-3">
                Qty
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              {/* <th scope="col" class="px-6 py-3">
                    
                </th> */}
            </tr>
          </thead>

          <tbody>
            {Object.keys(cartData).map((k) => {
              return (
                <tr
                  key={k}
                  class=" border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                  >
                    <img
                      src={cartData[k].image}
                      alt={cartData[k].productName}
                      className="w-fit h-24 object-cover mb-2"
                    />{" "}
                   <p className="text-blue-500 "> {cartData[k].productName}</p>
                  </th>
                  {/* <td class="px-6 py-4">
                    Silver
                </td> */}
                  <td class="px-6 py-4">
                    {/* <div className="flex space-x-2"> */}
                    <CartAmountToggle k={k} cartData={cartData} />
                    {/* </div> */}
                  </td>
                  <td class="px-6 py-4">${cartData[k].price?.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className=" flex flex-row justify-between">
      <div className="flex flex-row m-8 bg-gray-900 w-fit p-2 ">
        <p className="text-violet-600 ">Subtotal </p>
        <p className="text-violet-600 ml-1 ">
          {" "}
          <svg
            width="24"
            height="24"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M22.0029 3V7.49704C22.0029 7.77482 21.7777 8 21.4999 8V8C21.3 8 21.1201 7.88104 21.034 7.70059C19.4263 4.32948 15.9866 2 12.0029 2C6.81752 2 2.55397 5.94668 2.05225 11"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />{" "}
            <path
              d="M17 9.99999L17 15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V10C7 8.89543 7.89543 8 9 8H15C16.1045 8 17 8.89543 17 9.99999Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />{" "}
            <path
              d="M12 11L12 8"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />{" "}
            <path
              d="M2.05084 21V16.503C2.05084 16.2252 2.27603 16 2.5538 16V16C2.75372 16 2.93363 16.119 3.01969 16.2994C4.62743 19.6705 8.06709 22 12.0508 22C17.2362 22 21.4997 18.0533 22.0015 13"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />{" "}
          </svg>
        </p>
        <p className="text-gray-600 ml-3">${SubTotal()}</p>
      </div>

      <div className="flex flex-row m-8 bg-gray-300 w-fit p-2 cursor-pointer" onClick={initiatePayment}>
        <p className="text-violet-600">Order Now </p>
        <p className="text-violet-600  ml-1">
          {" "}
          <svg
            
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            class="bi bi-credit-card-2-front"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"
              fill="currentColor"
            ></path>{" "}
            <path
              d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
              fill="currentColor"
            ></path>{" "}
          </svg>
        </p>
      </div>
      </div>
    </div>
  );
}

export default page;

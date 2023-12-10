"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cartLength } from "../functions/cart";
import { UserContext } from "../Context/UserProvider";
import { useEffect, useState } from "react";
function Navbar() {
  const { loggedIn, login, logout, user } = React.useContext(UserContext);
  // if (!user.value) {
  //   // Render loading indicator or alternative content while user data is fetching
  //   return <div class="lds-hourglass"></div>;
  // }
  const [dropdown, setDropdown] = useState(false);
  const [userExists, setuserExists] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (token) {
      setuserExists({ value: token });
    }
    if (loggedIn) {
      login();
      console.log(user);
    } else {
      console.log("User is not logged in");
      console.log(user);
    }
  }, [loggedIn]);
  console.log(userExists);
  const toggleDropdown = () => {
    console.log(dropdown)
    setDropdown(!dropdown);
  };
  // // login()
  // console.log('User:', user);
  // console.log('Logged In:', loggedIn);
  // console.log("User", user);
  // console.log(loggedIn, login, logout, user)
  //   console.log(loggedIn, login, logout, user);

  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-violet-100 mb-4 md:mb-0"
        >
          <Image src="/logo.png" alt="logo" width={50} height={50} />

          <span class="ml-3 text-xl">Zomato-lite</span>
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
          <Link
            href="/add-restaurant"
            class="mr-5 hover:text-indigo-600 cursor-pointer"
          >
            Add Restaurant
          </Link>
          {/* <a class="mr-5 hover:text-gray-900">Login</a> */}
          <Link
            href="/signup"
            class="mr-5 hover:text-indigo-600 cursor-pointer"
          >
            Create Account
          </Link>
          <Popover>
            <PopoverTrigger>Dishes</PopoverTrigger>
            <PopoverContent className=" w-full h-full flex flex-col shadow-indigo-600/100 border-none shadow-md text-indigo-600 bg-black">
              {/* <div className="hover:shadow-md mb-3 p-0"> */}
              <Link
                href="/dishes/cakes"
                class=" hover:text-pink-600 cursor-pointer hover:shadow-md mb-3 p-0"
              >
                Cakes
              </Link>
              {/* </div> */}
              <div className="hover:shadow-md mb-3">
                <Link
                  href="/dishes/pastries"
                  class="mb-5 hover:text-pink-600 cursor-pointer"
                >
                  Pastries
                </Link>
              </div>
              <div className="hover:shadow-md">
                <Link
                  href="/dishes/desserts"
                  class=" hover:text-pink-600 cursor-pointer"
                >
                  Desserts
                </Link>
              </div>
            </PopoverContent>
          </Popover>
          </nav>
          {/* <div className=" flex flex-col absolute  shadow-md text-indigo-600 bg-black ml-5 right-7 mr-12  " onClick={toggleDropdown}>
      
      
    <div className={`p-2 absolute flex flex-col items-center border-slate-900 shadow-md text-indigo-600 bg-black right-8 top-7  ml-8 ${dropdown ? " " : "hidden"}`}>
    <ul >
      <li>
        <Link className='hover:text-pink-600 cursor-pointer hover:shadow-md mb-3 p-0' href="/category1">Category 1=</Link>
      </li>
      <li>
        <Link className='mb-5 hover:text-pink-600 cursor-pointer' href="/category2">Category 2</Link>
      </li>
      <li>
        <Link className=" hover:text-pink-600 cursor-pointer" href="/category3">Category 3</Link>
      </li>
    </ul>
    </div>
    Home
  </div> */}
          {/* <a href = '/dishes' class="mr-5 hover:text-indigo-600 cursor-pointer">Dishes</a> */}
        
        {/* {user?.value ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-person-lines-fill"
              viewBox="0 0 16 16"
              onMouseOver={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />{" "}
            </svg>
          ) : (
            <>
              <Link href="/login">
                <button class="inline-flex items-center hover:text-indigo-600 bg-indigo-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                  Login
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </>
          )}
     */}
        {/* {user.value ? (
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-person-lines-fill"
                viewBox="0 0 16 16"
                onMouseOver={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />{" "}
              </svg>
            ) : (
              
                <>
                  
              <button href="/login" class="inline-flex items-center hover:text-indigo-600 bg-indigo-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                  Login
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                </>
              
            )} */}
        {/* <span className="text-gray-700">items: {item.length}</span>
        <span className="text-gray-700">{item.name}</span> */}
        <Popover>
          <PopoverTrigger>
          
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-person-lines-fill"
                viewBox="0 0 16 16"
                onMouseOver={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />{" "}
              </svg>
            
         
          </PopoverTrigger>
        {/* {user?.value ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-person-lines-fill"
              viewBox="0 0 16 16"
              onMouseOver={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />{" "}
            </svg>
          ) : (
            <>
              <Link href="/login">
                <button class="inline-flex items-center hover:text-indigo-600 bg-indigo-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                  Login
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </>
          )} */}

        {/* <div class="lds-hourglass"></div> */}

        {/* <div className="hover:shadow-md mb-3 p-0"> */}
        <PopoverContent className=" w-full h-full flex flex-col border-none shadow-pink-500/100 shadow-md text-indigo-600 bg-black">
        
        {user.value ? (
          <>
        <Link
              href="/account"
              class=" hover:text-pink-600 cursor-pointer hover:shadow-md mb-3 p-0"
            >
              Account
            </Link>
       
            <div className="hover:shadow-md mb-3">
              <Link
                href="/orders"
                class="mb-5 hover:text-pink-600 cursor-pointer"
              >
                Orders
              </Link>
            </div>
            <div className="hover:shadow-md" onClick={logout}>
              <Link href="/login" class=" hover:text-pink-600 cursor-pointer">
                Logout
              </Link>
            </div>
            </>
            )
            : (<Link href="/login">
            <button class="inline-flex items-center hover:text-pink-600  border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>)
            } 
          </PopoverContent>
        </Popover>

        {/* <a href="/cart" className="text-gray-600">
          {}
        </a> */}
      </div>
    </header>
  );
}

export default Navbar;

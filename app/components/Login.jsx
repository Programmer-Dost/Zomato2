import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <div className="flex flex-row items-center justify-center">
      <Image src="/logo.png" alt="Logo" className="mx-auto mb-4" height={100} width={100} />
      <h1 className="text-[22px] font-bold mt-2 mb-2 text-black ml-4">
        TO-DO
      </h1>
    </div>
    <div className="w-full max-w-md">
      <form className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h1 className="text-[22px] font-bold mt-2 mb-2 text-black">
            Sign in to your Account
          </h1>
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex">
          <input
            id="remember-me"
            type="checkbox"
            className="form-checkbox h-5 w-5 "
          />
          <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
            Remember Me
          </label>
          </div>
          <Link
            href="/forgot-password"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Forgot Password?
          </Link>
        </div>

          <button
            className="bg-orange-600 hover:bg-orange-700 w-full mt-4 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
  

      </form>
      <div className="text-center">
        <p className="text-gray-500 text-xs">
          Don't have an account yet?
          <Link
            href="/signup"
            className="ml-1 text-blue-500 hover:text-blue-800"
          >
            Sign Up
          </Link>
        </p>
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 ToDo. All rights reserved.
      </p>
    </div>
  </div>
  )
}

export default Login
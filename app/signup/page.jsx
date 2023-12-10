"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
function LoginPage() {

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({default: "default is required"});
  const [shouldSignup, setShouldSignup] = useState(false);
  const [isChecked, setIsChecked] = useState({ checked: false });
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    ContactNumber: 0,
    Address: "",
    Email: "",
    Password: "",
  });
  
  const handleCheckboxChange = () => {
    // Toggle the value of isChecked when the checkbox is clicked
    setIsChecked({ checked: !isChecked.checked });
  };

 
 
  // Handle input changes and update state
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
//Validation Logic Here
    const validationErrors = {};

      if (!formData.username) {
        validationErrors.username = "Username is required.";
      }
      if (!formData.ContactNumber) {
        validationErrors.ContactNumber = "Please enter your Contact Number.";
      }
      if (!formData.Email) {
        validationErrors.Email = "Please enter your Email for future updates.";
      }
      if (!formData.Address) {
        validationErrors.Address = "Address is required for delivery.";
      }
  
      if (!formData.Password) {
        validationErrors.Password = "Password is required.";
      }
  
      if (formData.Password.includes(formData.username)) {
        validationErrors.Password = "Username should not be used as a password.";
        
      }
      if (formData.Email.length > 1 && formData.Email.length < 10) {
        validationErrors.Email = "Please enter correct E-mail id";
        
      }
      if (formData.Email.length <= 1) {
        validationErrors.Email = "Please enter your Email for future updates.";
        
      }
      if (formData.ContactNumber.length < 10) {
        validationErrors.ContactNumber = "Please enter correct Contact Number";
        
      }
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        
      // console.log(validationErrors)
        // setShouldSignup(false);
      } else {
        setErrors(validationErrors);

      }
  };
  const isFormValid = () => {
    // Check if there are any errors in the errors state
    return Object.values(errors).every((error) => error === '');
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // setActiveStep(2)
    // Convert form data to JSON
    // const jsonData = JSON.stringify(formData, null, 2);
    const validationErrors = {};

      if (!formData.username) {
        validationErrors.username = "Username is required.";
      }
      if (!formData.ContactNumber) {
        validationErrors.ContactNumber = "Please enter your Contact Number.";
      }
      if (!formData.Email) {
        validationErrors.Email = "Please enter your Email for future updates.";
      }
      if (!formData.Address) {
        validationErrors.Address = "Address is required for delivery.";
      }
  
      if (!formData.Password) {
        validationErrors.Password = "Password is required.";
      }
  
      if (formData.Password.includes(formData.username)) {
        validationErrors.Password = "Username should not be used as a password.";
        
      }
      if (formData.Email.length > 1 && formData.Email.length < 10) {
        validationErrors.Email = "Please enter correct E-mail id";
        
      }
      if (formData.Email.length < 1) {
        validationErrors.Email = "Please enter your Email for future updates.";
        
      }
      if (formData.ContactNumber.length < 10) {
        validationErrors.ContactNumber = "Please enter correct Contact Number";
        
      }
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        
       
        
      } else {
      
        
      }
  
      
    

    //     {  "username": "Abhi",
    //     "ContactNumber": 679234567890,
    //     "Email": "abhi2y@email.com",
    //     "Password": "abhi",
    //     "Address": "PNT Colony"
    //   }
    // Log the JSON data (you can send it to a server or save it as needed)

    // Convert form data to JSON
    const jsonDataFinal = JSON.stringify(formData, null, 2);
    console.log("String form Data Final", jsonDataFinal);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonDataFinal,
      });

      if (response.status === 200) {
        setSubmitted(true);
        console.log("Form data submitted successfully", formData);
        toast.success("😎 Account created successfully!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {

          router.push("http://localhost:3000/");
      }, 3000);
        setFormData({
          username: "",
          ContactNumber: 0,
          Address: "",
          Email: "",
          Password: "",
        });
       
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    //  console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
        <ToastContainer
        
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
      <div className="flex flex-row items-center justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          className="mx-auto mb-4"
          height={100}
          width={100}
        />
        {/* <h1 className="text-[22px] font-bold mt-2 mb-2 text-black ml-4">
          Zomato
        </h1> */}
      </div>
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          action="/api/signup"
          method="POST"
          className="bg-white  rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <h1 className="text-[22px] font-bold mt-2 mb-2 text-black">
              Create a New Account
            </h1>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              
              onChange={handleInputChange}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">{errors.username}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              placeholder="******************"
            />
            {errors.Email && (
              <p className="text-red-500 text-xs italic">{errors.Email}</p>
            )}
            {/* <p className="text-red-500 text-xs italic">
              Please enter your desired Username
            </p> */}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              name="Password"
              value={formData.Password}
              onChange={handleInputChange}
            />
            {errors.Password && (
              <p className="text-red-500 text-xs italic">{errors.Password}</p>
            )}
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="contactNumber"
            >
              Contact Number
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="ContactNumber"
              type="number"
              placeholder="******************"
              name="ContactNumber"
              value={formData.ContactNumber}
              onChange={handleInputChange}
            />
            {errors.ContactNumber && (
              <p className="text-red-500 text-xs italic">
                {errors.ContactNumber}
              </p>
            )}
            {/* <p className="text-red-500 text-xs italic">
              Please enter your Contact Number
            </p> */}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Address"
              type="Address"
              placeholder="******************"
              name="Address"
              value={formData.Address}
              onChange={handleInputChange}
            />
            {errors.Address && (
              <p className="text-red-500 text-xs italic">{errors.Address}</p>
            )}
            {/* <p className="text-red-500 text-xs italic">
              Please enter your Delivery Address.
            </p> */}
          </div>
         
          <div className="flex justify-between">
            <div className="flex">
              <input
                id="remember-me"
                type="checkbox"
                className="form-checkbox h-5 w-5 "
                // checked={isChecked}
                
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-700"
              >
                Remember me
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
            className={`bg-indigo-500 hover:bg-indigo-700 w-full mt-4 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ${isFormValid() ? "" : "disabled cursor-not-allowed"}` }
            type="submit"
            disabled={!isFormValid()}
          >
            { submitted? "User Created" : "Sign Up"}
          </button>
        </form>
        <div  className="text-center"  >
          <p className="text-gray-500 text-xs">
            Already have an account?
            <Link
              href="/login"
              className="ml-1 text-blue-500 hover:text-blue-800"
            >
              Sign In
            </Link>
          </p>
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Zomato. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

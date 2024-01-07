"use client";
import React, { useState, useEffect } from "react";
import Tabs from "../components/Tabs";
import RestaurantType from "../components/RestaurantType";
import { UserContext } from "../Context/UserProvider";
import useGeoLocation from "./useGeoLocationHook";
import { useRouter } from "next/navigation";
import Link from "next/link";
function CreateRestaurant() {
  const location = useGeoLocation();
  const { loggedIn, login, userData, contextLoading } =
    React.useContext(UserContext);
  let router = useRouter();
  useEffect(() => {
    if (contextLoading == false) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        restaurantLat: location.coordinates?.lat || "",
        restaurantLng: location.coordinates?.lng || "",
      }));
      if (!loggedIn) {
        login();
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    }
  }, [loggedIn, contextLoading, userData, location]);

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  };

  const [activeStep, setActiveStep] = useState(1); // Declare activeStep state
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  //Handling form data

  let lat = location.coordinates?.lat;
  let lng = location.coordinates?.lng;
  const [formData, setFormData] = useState({
    restaurantName: "hi",
    restaurantContactNumber: 0,
    restaurantEmail: "",
    restaurantAddress: "",
    restaurantLat: location.coordinates?.lat || "Not Available",
    restaurantLng: location.coordinates?.lng || "Not Available",
    restaurantType: {
      items: [
        {
          name: "",
          description: "",
        },
      ],
    },
  });
  // setFormData((prevData) => ({
  //   ...prevData,
  //   restaurantLat:lat,

  //   restaurantLng:lng
  // }));

  // Handle input changes and update state
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      userId: userData._id,
    }));

  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic here
    const validationErrors = {};

    if (!formData.restaurantName) {
      validationErrors.restaurantName = "Name is required.";
    }
    if (!formData.restaurantContactNumber) {
      validationErrors.restaurantContactNumber = "Contact Number is required.";
    }
    if (!formData.restaurantEmail) {
      validationErrors.restaurantEmail = "Restaurant Email is required.";
    }
    if (!formData.restaurantAddress) {
      validationErrors.restaurantAddress = "Restaurant Address is required.";
    }

    if (
      formData.restaurantEmail.length > 1 &&
      formData.restaurantEmail.length < 10
    ) {
      validationErrors.restaurantEmail = "Please enter correct E-mail id";
    }
    if (formData.restaurantEmail.length < 1) {
      validationErrors.restaurantEmail = "Please enter E-mail id";
    }
    if (formData.restaurantContactNumber.length < 9) {
      validationErrors.restaurantContactNumber =
        "Please enter correct Contact Number";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setActiveStep(2);
    }
    console.log(formData);
  };
  // Conditionally set the overlay to be visible
  if (location.coordinates && location.coordinates.lat) {
    overlayStyles.display = "none";
  } else {
    overlayStyles.display = "block";
  }
  return (
    <div>
      <Tabs activeStep={activeStep} setActiveStep={setActiveStep} />
      {!loggedIn ? (
        <div className="text-gray-400 flex justify-center items-center absolute bottom-0 top-0 left-0 right-0 text-2xl">
          Loading...
        </div>
      ) : (
        <>
          <div style={overlayStyles}>
            <p style={{ fontSize: "24px", color: "red" }}>
              Location data is not available
            </p>
          </div>
          <section
            class={`text-gray-600 body-font ${
              activeStep === 1 ? "block" : "hidden"
            } transition-all duration-300 `}
          >
            <div class="container px-15 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                  width="100%"
                  height="100%"
                  class="absolute inset-0 mx-0 my-0"
                  frameborder="0"
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283605.114644095!2d72.0999147588655!3d20.736647817511802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1694365747888!5m2!1sen!2sus"
                ></iframe>
                <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div class="lg:w-1/2 px-6">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                      ADDRESS
                    </h2>
                    <p class="mt-1">
                      Please place the pin accurately at your outlet’s location
                      on the map
                    </p>
                  </div>
                  <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                      EMAIL
                    </h2>
                    <Link class="text-indigo-500 leading-relaxed">
                      example@email.com
                    </Link>
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                      PHONE
                    </h2>
                    <p class="leading-relaxed">123-456-7890</p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2  flex flex-col p-12 md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 class="text-indigo-100 text-lg mb-1 font-medium title-font">
                  Restaurant Details
                </h2>
                <p class="leading-relaxed mb-5 text-gray-600">
                  Name, address and location
                </p>
                <form
                  onSubmit={handleSubmit}
                  action="/api/restaurants"
                  method="POST"
                >
                  <div class="relative mb-4">
                    <label
                      for="name"
                      class="leading-7 text-sm block text-gray-700 font-bold mb-2"
                    >
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      id="restaurantName"
                      name="restaurantName"
                      value={formData.restaurantName}
                      onChange={handleInputChange}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-700  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.restaurantName && (
                      <p className="text-red-500">{errors.restaurantName}</p>
                    )}
                  </div>
                  <div class="relative mb-4">
                    <label
                      for="email"
                      class="leading-7 text-sm block text-gray-700 font-bold mb-2"
                    >
                      <div class="relative mb-4">
                        <label
                          for="number"
                          class="leading-7 text-sm block text-gray-700 font-bold mb-2"
                        >
                          Restaurant Contact Number
                        </label>
                        <input
                          type="number"
                          id="restaurantContactNumber"
                          name="restaurantContactNumber"
                          value={formData.restaurantContactNumber}
                          onChange={handleInputChange}
                          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-700  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        {errors.restaurantContactNumber && (
                          <p className="text-red-500">
                            {errors.restaurantContactNumber}
                          </p>
                        )}
                      </div>
                      Restaurant Email
                    </label>
                    <input
                      type="email"
                      id="restaurantEmail"
                      name="restaurantEmail"
                      value={formData.restaurantEmail}
                      onChange={handleInputChange}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.restaurantEmail && (
                      <p className="text-red-500">{errors.restaurantEmail}</p>
                    )}
                  </div>
                  <div class="relative mb-4">
                    <label
                      for="name"
                      class="leading-7 text-sm block text-gray-700 font-bold mb-2"
                    >
                      Restaurant Address
                    </label>
                    <input
                      type="text"
                      id="restaurantAddress"
                      name="restaurantAddress"
                      value={formData.restaurantAddress}
                      // value={value}
                      onChange={handleInputChange}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-700  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.restaurantAddress && (
                      <p className="text-red-500">{errors.restaurantAddress}</p>
                    )}
                  </div>

                  <div className="flex flex-row justify-items-center">
                    <div class="relative mb-4">
                      <div className="pr-4">
                        <input
                          type="text"
                          id="restaurantLat"
                          name="restaurantLat"
                          placeholder="Enter Latitude"
                          value={formData.restaurantLat}
                          onChange={handleInputChange}
                          class="w-full pl-4 bg-white rounded border border-gray-300 focus:border-indigo-700  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div class="relative mb-4">
                      <div>
                        <input
                          type="text"
                          id="restaurantLng"
                          name="restaurantLng"
                          placeholder="Enter Longitude"
                          value={formData.restaurantLng}
                          onChange={handleInputChange}
                          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Next
                  </button>
                  <p class="text-xs text-gray-500 mt-3">
                    Chicharrones blog helvetica normcore iceland tousled brook
                    viral artisan.
                  </p>
                </form>
                {submitted && (
                  <div>
                    <p>Form submitted successfully!</p>
                    <button onClick={() => setSubmitted(false)}>Close</button>
                  </div>
                )}
              </div>
            </div>
          </section>

          <RestaurantType
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </>
      )}
    </div>
  );
}

export default CreateRestaurant;

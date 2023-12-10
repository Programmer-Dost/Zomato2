import React from "react";

function restaurantInfo() {
  return (
    <div>
      <section class="text-gray-600 body-font ">
        <div class="container px-15 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
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
                  Please place the pin accurately at your outlet’s location on
                  the map
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-indigo-500 leading-relaxed">example@email.com</a>
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

            <div class="relative mb-4">
              <label
                for="name"
                class="leading-7 text-sm block text-gray-700 font-bold mb-2"
              >
                Restaurant Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-700  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
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
                    id="number"
                    name="number"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-700  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                Restaurant Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="flex flex-row justify-items-center">
              <div class="relative mb-4">
                {/* <label
            for="name"
            class="leading-7 text-sm block text-gray-700 font-bold mb-2"
          >
            Latitude
          </label> */}
                <div className="pr-4">
                  <input
                    type="text"
                    id="Latitude"
                    name="Latitude"
                    placeholder="Enter Latitude"
                    class="w-full pl-4 bg-white rounded border border-gray-300 focus:border-indigo-700  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="relative mb-4">
                {/* <label
            for="email"
            class="leading-7 text-sm block text-gray-700 font-bold mb-2"
          >
           Longitude
          </label> */}
                <div>
                  <input
                    type="text"
                    id="Longitude"
                    name="Longitude"
                    placeholder="Enter Longitude"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>

            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Next
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default restaurantInfo;

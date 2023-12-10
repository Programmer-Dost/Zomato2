"use client"
// pages/index.js or your desired page
import React, { useState } from 'react';
// import Map from '../components/Map';
import useGeoLocation from './useGeoLocationHook';

function Home() {
//   const [location, setLocation] = useState(null);
const location = useGeoLocation();

// Use latitude and longitude to get address
// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = "AIzaSyC5SKJF4G1qi9njFJfHuzfFOXsCfQZoIUw";
const latitude = 37.4219999;
const longitude = -122.0840575;

// Construct the API URL
// const apiUrl = `https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap`
const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}`;

// Make the API request
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'OK') {
      const address = data.results[0].formatted_address;
      console.log(`Address: ${address}`);
    } else {

      console.error('Reverse geocoding failed:', data.status);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });


  return (
    <div>
      <h1>Map Example</h1>
      {/* <Map location={location} setLocation={setLocation} /> */}
      {/* {location && (
        <div>
          <h2>Location</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )} */}


<div class="separator">User Geo Location</div>

<div className="row d-flex justify-content-center mt-3 mb-5 pb-5">
    <div className="col-6">
        <div class="card">
            <div class="card-header text-left font-weight-bold d-flex">
                <div className="inline-block mr-auto pt-1">
                    {location.loaded
                        ? JSON.stringify(location)
                        : "Location data not available yet."}
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default Home;

"use client"
import React, { useState } from 'react';

function Form() {
  // Initialize state to store form data
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     age: '',
//     subscribe: false,
//   });

  // Handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  let form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit)
let formData = new FormData(form)
let data = Object.fromEntries(formData)
let jsonData = JSON.stringify(data)
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: jsonData
    }).then(res=>res.json()).then(result=>console.log(result.data)).catch(err=>console.log(err))

    // Convert form data to JSON
    // const jsonData = JSON.stringify(formData, null, 2);

    // Log the JSON data (you can send it to a server or save it as needed)
    // console.log(jsonData);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"

        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
  
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
 
        />
      </div>
      <div>
        <label>
          Subscribe to newsletter:
          <input
            type="checkbox"
            name="subscribe"
 
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

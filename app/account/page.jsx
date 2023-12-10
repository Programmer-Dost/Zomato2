"use client";
import React from "react";
import { UserContext } from "../Context/UserProvider";
import { useState, useEffect } from "react";
// import { gettingUserss } from "../api/login/route";
var jwt = require("jsonwebtoken");
function page() {
  const { loggedIn, login, logout, user } = React.useContext(UserContext);
  const [decoded, setDecoded] = useState({});
  const [users, setUsers] = useState([])
//   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//   setTimeout(() => {
//       const decoded = jwt.decode(user.value);
    
//       if (loggedIn) {
//         // let token = localStorage.getItem('token')
//         console.log(decoded);
//       }
//       if (decoded.Email) {
         
//         const user = User.find({
//           Email: decoded.Email,
//         });
//         console.log("user", user);
//       }
//   }, 5000);

useEffect(() => {
    if (loggedIn) {
       let decodedToken = jwt.decode(user.value)
       console.log("decoded token", decodedToken)
        setDecoded(decodedToken);
      }

      // const fetchUsers = async () => {
      //   try {
      //     const response = await fetch('http://localhost:3000/api/login', {
      //       method: "GET",
      //     });
      //     const responeResult = await response.json()
      //     console.log(responeResult)
      //     console.log(response.result, "response")
      //     setUsers(response.data);
      //   } catch (error) {
      //     console.error('Error fetching users:', error);
      //   }
      // };
  
      // fetchUsers();
}, [loggedIn])
console.log(decoded)
// console.log('User logged in', users)
//   const fetchUsers = async () => {
//     if(decoded.Email != null){
//   };
// }

// console.log("email", decoded.Email)
// useEffect(() => {
//     const connectAndFindUser = async () => {
//       try {
//         await mongoose.connect(process.env.MONGODB_URI);

//         // Check if decoded is not null and has the 'Email' property
//         if (decoded && decoded.Email) {
//           const userResult = await User.find({ Email: decoded.Email });
//           console.log("user", userResult);
//         }
//       } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//       }
//     };

//     // Call connectAndFindUser only when decoded is not null
//     if (decoded) {
//       connectAndFindUser();
//     }
//   }, [decoded]);
  return <div className="text-violet-700">
    
<h1>Hi {decoded.username}</h1>
<h1>Hi {decoded.Email}</h1>
<h1>Hi {decoded.ContactNumber}</h1>
<h1>Hi {decoded.Address}</h1>

  </div>;
}

export default page;

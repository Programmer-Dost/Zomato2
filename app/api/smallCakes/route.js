import React from 'react'
import mongoose from "mongoose";
// import User from '@/models/UserModel';
import smallCake from '@/app/models/SmallCakesModel';
import { NextResponse } from "next/server";
    // const handler = async (req, res) =>{
        // const {name, email, password} = req.body
        // const user = await User.create({
        //     name,
        //     email,
        //     password
        // })
        // res.status(201).json({
        //     message: 'User Created Successfully',
        //     user
        // })

        export async function POST(req, res) {
            const payload = await req.json();
            await mongoose.connect(process.env.MONGODB_URI);
            let d = new smallCake(payload);
            const result = await d.save();
            return NextResponse.json({ result, success: true });
          }

        export async function GET(req, res) {
            let  smallCakes =[]
            let success = true
            try{
                    await mongoose.connect(process.env.MONGODB_URI);
                    smallCakes= await smallCake.find();
              
                console.log(smallCakes);
                // if(user){
                // if (req.body.Email == user.Email && req.body.Password == user.Password){
                //     //  res.status(200).json({success: true}, {username:user.username, Email:user.Email })
                //     return NextResponse.json({success: true, message: 'Successfully Logged in', username:user.username, Email:user.Email})
                //     // username:user.username, Email:user.Email
                //     // return NextResponse.json(JSON.stringify({success: true, message: 'Successfully Loged in'}),{ status: 200, headers: { 'content-type': 'application/json' } }, {username:user.username, Email:user.Email })
                // }
                  
            // }
        }catch(e){
            smallCakes={result:"error"}
            success=false
            // console.log(e);
        }
        return NextResponse.json({result:smallCakes, success});
            // else {
            //         // If no user is found, send a different response (e.g., success: false)
            //         res.status(200).json({ success: false, message: "User not found" });
            //       }
        // const payload = await req.json();
        // await mongoose.connect(process.env.MONGODB_URI);
        // let user = new User(payload);
        // const result = await user.save();
        // return NextResponse.json({ result, success: true });
      }
    //     ex
// import Dessert from "@/models/DessertModel";
import Restaurant from "@/models/RestaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = {};
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      data = await Restaurant.find();
    } catch (error) {
      data = { success: false };
    }
    return NextResponse.json({ result: data, success: true });
  }

  export async function POST(req, res) {
    const payload = await req.json();
    await mongoose.connect(process.env.MONGODB_URI);
    let d = new Restaurant(payload);
    const result = await d.save();
    return NextResponse.json({ result, success: true });
  }
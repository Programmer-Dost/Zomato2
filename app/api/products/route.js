import connectDb from "@/app/middlewares/mongoose";
import connectMongoDB from "@/lib/mongodb";
import Dessert from "@/models/DessertModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// export const handler = async (req, res) => {
//     await connectDb()
//   if (req.method == "POST") {
//     for (let i = 0; i < req.body.length; i++) {
//       let d = new Dessert({
//         id: req.body[i].id,
//         name: req.body[i].name,
//         description: req.body[i].description,
//         price: req.body[i].price,
//         img: req.body[i].img,
//       });
//       await d.save();
//     }
//     res.status(200).json({ success: "Saved successfully" });
//   } else {
//     res.status(400).json({ error: "This method is not allowed" });
//   }
//   let desserts = await Dessert.find();
//   res.status(200).json({ desserts });
// };
// export default connectDb(handler)
// export async function GET() {
//   await connectMongoDB();
//   let desserts = await Dessert.find();
//   return NextResponse.json({ desserts });
// }
export async function GET() {
  let data = {};
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    data = await Dessert.find();
  } catch (error) {
    data = { success: false };
  }
  return NextResponse.json({ result: data, success: true });
}
// export async function POST(req, res) {
//     // Implement the logic for the POST request here
//     // let desserts = await Dessert.find();
//     await connectDb();

//         if (req.method == "POST") {
//         for (let i = 0; i < req.body.length; i++) {
//             let d = new Dessert({
//               id: req.body[i].id,
//               name: req.body[i].name,
//               description: req.body[i].description,
//               price: req.body[i].price,
//               img: req.body[i].img,
//             });
//             await d.save();
//           }
//           NextResponse.json("Saved successfully");
//         //   res.status(200).json({ success: "Saved successfully" });
//         }
//      else {
//         NextResponse.error("This method is not allowed");
//             // res.status(400).json({ error: "This method is not allowed" });
//           }
// return NextResponse.json({ desserts });
// try{} catch (error) {
//     console.error("Error while fetching desserts:", error);
//     return NextResponse.error("Internal Server Error");
// }
// }

export async function POST(req, res) {
  const payload = await req.json();
  await mongoose.connect(process.env.MONGODB_URI);
  let d = new Dessert(payload);
  const result = await d.save();
  return NextResponse.json({ result, success: true });
}

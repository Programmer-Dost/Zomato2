import Order from "@/models/OrderModel";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);
export async function POST(req, res) {
  let body = await req.text();
  let valueToJson = JSON.parse(body);
  const sig = req.headers["stripe-signature"];
  // console.log(sig);
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      valueToJson,
      sig,
      process.env.Stripe_Webhook_Secret
    );
    //   console.log(event);
  } catch (err) {
    // console.log(err);
    return new Response(
      `Webhook Error: ${err ? err.message : "Unknown Error"}`
    );
    //  return NextResponse({message: err.message});
  }
  let session1 = event.data.object;
  console.log(session1, "session");
  if (!session1?.metadata?.userId) {
    return new Response(null, { status: 200 });
    // console.log("Session", session)
    // return NextResponse({msg:"No user id found"})
  }



  // Example: Log the details
  // console.log("Charge Id", chargeId)
  // console.log("Payment Status:", orderStatus);
  // console.log("Invoice:", receipt_url);
  // console.log("Billing Email:", billingEmail);
  // console.log("Amount:", amount/100);
  // console.log("Payment Method:", paymentMethod);
  // console.log("Card Brand:", cardBrand);
  // console.log("Last 4 Digits:", last4Digits);

  // const invoiceId = charge.invoice;

  // if (invoiceId) {
  //   const invoice = await stripe.invoices.retrieve(invoiceId);
  //   console.log("Invoice", invoice);
  //   // return NextResponse.json({ invoice: invoice });
  // }
  // return NextResponse.json({ charge: charge});

  // return NextResponse.json({ chargeid: chargeId });

  // const sessionDetails = await stripe.checkout.sessions.retrieve(session.id);
  // let userId = session.metadata.userId

  // Handle the event
  switch (event.type) {
    // case "payment_intent.succeeded":
    //   console.log(sessionDetails);
    //   //   return NextResponse.success({ msg: "Order completed and processed successfully" });
    //   // Then define and call a function to handle the event payment_intent.succeeded
    //   break;
    // ... handle other event types
    case "checkout.session.completed":
      await mongoose.connect(process.env.MONGODB_URI);
      let session = event.data.object;
      let paymentIntentId = session.payment_intent;
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
      // let subtotal = paymentIntent.amount;
      console.log("payment Intent", paymentIntent);
      const chargeId = paymentIntent.latest_charge;
      if (chargeId) {
        const charge = await stripe.charges.retrieve(chargeId);
        console.log("Charge", charge);

        const orderStatus = charge.status; // "succeeded"
        const amount = charge.amount; // 11999 (in the smallest currency unit, e.g., cents)
        const paymentMethod = charge.payment_method_details.type; // "card"
        const billingEmail = charge.billing_details.email;
        // Accessing card details
        const cardBrand = charge.payment_method_details.card.brand; // "visa"
        const last4Digits = charge.payment_method_details.card.last4; // "4242"
        const receipt_url = charge.receipt_url;
        let order = new Order({
          userId,
          orderStatus,
          amount,
          paymentMethod,
          billingEmail,
          cardBrand,
          last4Digits,
          receipt_url,
        });
        await order.save();
      }
    //     // console.log(order, "order details")
    default:
      console.log(`Unhandled event type ${event.type}`);
    //   return NextResponse.success({ msg: "Order completed and processed successfully" });
  }
  return new Response(null, { status: 200 });
  //   return NextResponse.success({ msg: "Order completed and processed successfully" });
  // Return a 200 response to acknowledge receipt of the event
  //   NextResponse({status:200});

  // if(event.type === 'checkout.session.completed'){
  //     // const order = event.data.object.order;
  //     // console.log(order, "order details")
  //     return NextResponse({msg:"Order completed"})
  // }
  // if(event.type === 'checkout.succeeded'){
  //     // const order = event.data.object.order;
  //     // console.log(order, "order details")
  //     return NextResponse({msg:"Order completed"})
  // }
}

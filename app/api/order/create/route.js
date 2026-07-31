import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { address, items } = await request.json();

    if (!address || items.length === 0) {
      return NextResponse.json({ success: false, message: "Invalid data" });
    }

    // Fetch all products in ONE query instead of one per item
    const productIds = items.map((item) => item.product);
    const products = await Product.find({ _id: { $in: productIds } }).lean();

    const productMap = {};
    for (const product of products) {
      productMap[product._id.toString()] = product;
    }

    // Calculate amount in-memory (no DB calls)
    const amount = items.reduce((total, item) => {
      const product = productMap[item.product];
      if (!product) throw new Error(`Product not found: ${item.product}`);
      return total + product.offerPrice * item.quantity;
    }, 0);

    await inngest.send({
      name: "order/created",
      data: {
        userId,
        address,
        items,
        amount: amount + Math.floor(amount * 0.02),
        date: Date.now(),
      },
    });

    // Clear user cart
    await User.findByIdAndUpdate(userId, { cartItems: {} });

    return NextResponse.json({ success: true, message: "Order Placed" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

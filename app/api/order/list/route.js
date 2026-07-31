import connectDB from "@/config/db";
import Order from "@/models/Order";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    await connectDB();

    const orders = await Order.find({ userId })
      .sort({ date: -1 })
      .populate("address items.product")
      .lean();

    return NextResponse.json(
      { success: true, orders },
      {
        headers: {
          "Cache-Control": "private, max-age=30, stale-while-revalidate=60",
        },
      },
    );
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

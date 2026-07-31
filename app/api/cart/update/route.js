import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);

    const { cartData } = await request.json();

    await connectDB();
    await User.findByIdAndUpdate(
      userId,
      { cartItems: cartData },
      { new: true },
    ).lean();

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

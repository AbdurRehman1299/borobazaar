import connectDB from "@/config/db";
import authSeller from "@/lib/authSeller";
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    const isSeller = await authSeller(userId);

    if (!isSeller) {
      return NextResponse.json({ success: false, message: "Not Authorized" });
    }

    await connectDB();
    const products = await Product.find({}).lean();

    return NextResponse.json(
      { success: true, products },
      {
        headers: {
          "Cache-Control":
            "public, max-age=60, s-maxage=300, stale-while-revalidate=60",
        },
      },
    );
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

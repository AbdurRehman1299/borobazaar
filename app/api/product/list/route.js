import connectDB from "@/config/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();
    const products = await Product.find(
      {},
      "name description price offerPrice image category date",
    )
      .lean()
      .sort({ date: -1 });

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

import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { stat } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Sambungkan ke MongoDB
    await connectMongoDB();

    // Ambil semua data dari koleksi "Product"
    const data = await Product.find();

    // Log untuk debugging (log tidak akan dieksekusi setelah `return`)
    // console.log("Fetched Data", data);
    if(data.length === 0 || !data){
        //return NextResponse.json({msg: "kosong"})
        return NextResponse.json({ message: "No products found" }, { status: 200 });
    }

    // Kembalikan data sebagai response JSON
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);

    // Kembalikan error sebagai response JSON
    return NextResponse.json(
      { msg: "Something went wrong"},
      { status: 500 }
    );
  }
}

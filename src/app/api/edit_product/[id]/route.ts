import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLParams: any) {
  try {
    // Ambil body dari request
    const body = await request.json();
    const id = URLParams.params.id; // Pastikan `params` diakses di sini
    console.log("Params ID:", id);


    const { name, category, price } = body;

    // Sambungkan ke database
    await connectMongoDB();

    // Cari produk berdasarkan ID dan update
    const data = await Product.findByIdAndUpdate(
      id,
      { 
        name, 
        category, 
        price 
      },
    );

    // Berikan respons data
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ msg: "Something went wrong" }, { status: 500 });
  }
}

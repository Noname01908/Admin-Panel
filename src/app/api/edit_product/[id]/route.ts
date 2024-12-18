import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, {params}: {params:{id: string}}) {
  try {
    // Ambil body dari request
    const body = await request.json();
    const id = params; // Pastikan `params` diakses di sini
    console.log("Params ID:", id);


    const { name, category, price } = body;

    // Sambungkan ke database
    await connectMongoDB();

    const product = await Product.findById(id)
    if(product)
        console.log("Sesuai")
    else
      console.log("tidak Sesuai")

    // Cari produk berdasarkan ID dan update
    const data = await Product.findByIdAndUpdate(
      id,
      { name, category, price },
    );

    if (!data) {
      return NextResponse.json({ msg: "Product not found" }, { status: 404 });
    }

    // Berikan respons data
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ msg: "Something went wrong" }, { status: 500 });
  }
}

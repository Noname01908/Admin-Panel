import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
  try {
    // Ambil body dari request
    const id = URLParams.params.id; // Pastikan `params` diakses di sini
    console.log("Params ID:", id);

    // Sambungkan ke database
    await connectMongoDB();

    // Cari produk berdasarkan ID dan update
    const data = await Product.findByIdAndDelete(id);

    // Berikan respons data
    return NextResponse.json({msg: "Product Has Deleted"},data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ msg: "Something went wrong" }, { status: 500 });
  }
}

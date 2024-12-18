import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";
import { MongoConnect } from "../Mongo_Connect_ISENG/MongoCOnnect";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { img_src, fileKey, name, category, price } = body;

    // Validasi input dari client
    if (!img_src || !name || !category || !price) {
      return NextResponse.json(
        { msg: "All fields are required" },
        { status: 400 } // Bad Request
      );
    }

    // Sambungkan ke MongoDB
    await MongoConnect();

    // Tambahkan data ke database
    const newProduct = await Product.create({
      img_src: img_src, // Pastikan nama properti sesuai dengan model
      fileKey: fileKey || null,
      name,
      category,
      price,
    });

    // Respons sukses
    return NextResponse.json(
      { msg: "Product successfully added", product: newProduct },
      { status: 201 } // Created
    );
  } catch (err: any) {
    console.error("Error saving product:", err);

    // Tampilkan error validasi Mongoose (jika ada)
    if (err.name === "ValidationError") {
      return NextResponse.json(
        { msg: "Validation error", errors: err.errors },
        { status: 400 }
      );
    }

    // Respons umum untuk error lain
    return NextResponse.json(
      { msg: "Something went wrong", error: err.message },
      { status: 500 } // Internal Server Error
    );
  }
}

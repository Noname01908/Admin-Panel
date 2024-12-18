import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { stat } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // SAMBUNG DB DULU
    await connectMongoDB();

    // MENGAMBIL DATA DARI DB MELALUI SCHEMA YANG ADA DI KOMPONEN PRODUCT
    const data = await Product.find();

    // Log untuk debugging (log tidak akan dieksekusi setelah `return`)
    // console.log("Fetched Data", data);
    if(data.length === 0 || !data){
        // MESSAGE / PESAN AKAN MUNCUL DALAM BENTUK TEXT DI TAMPILAN WEB
        return NextResponse.json({ message: "No products found" }, { status: 200 });
    }

    // DATA AKAN MUNCUL DALAM BENTUK TEXT DI TAMPILAN WEB
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);

    // STATUS EROR AKAN MUNCUL DALAM BENTUK TEKS DI TAMPILAN WEB DENGAN MENGGUNAKAN NEXTRESPONSE.JSON
    return NextResponse.json(
      { msg: "Something went wrong"},
      { status: 500 }
    );
  }
}

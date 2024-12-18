import mongoose from "mongoose";

export const MongoConnect = async () => {
  try {
    // Cek apakah sudah ada koneksi aktif
    //statement ini akan berjalan ketika web telah terhubung dengan DB
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB is already connected");
      return mongoose.connection.asPromise();  // Kembalikan koneksi yang sudah ada
    }

    //*statement ini berjalan ketika kondisi web belom terhubung dengan DB
    // Cek apakah `MONGO_URL` tersedia
    const mongoURL = process.env.MONGO_URL_ISENG;
    if (!mongoURL) {
      throw new Error("MongoDB connection URL is not defined in environment variables");
    }

    // Sambungkan ke MongoDB jika belum terkoneksi
    const connection = await mongoose.connect(mongoURL)

    console.log("Connected to MongoDB successfully");
    return connection; // Kembalikan koneksi setelah berhasil
    //** */

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Lempar ulang error untuk penanganan lebih lanjut di layer lain
  }
};

import { Schema, model, models } from "mongoose";

// Mendefinisikan schema untuk produk
const productSchema = new Schema({
  // _id: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  fileKey: { type: String, required: true },
  img_src: { type: String, required: true },
});

// Menggunakan nama koleksi yang benar (di sini "Product")
const Product = models.products || model("products", productSchema);
export default Product;

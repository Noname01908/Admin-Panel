"use client"
import Image from "next/image";
import Test from "./test"
import { useState } from "react";
import Navbar from "@/Components/Front-End/navbar";
import Cart from "@/Components/Front-End/Cart";
import Hero from "@/Components/Front-End/Hero";
import TrendingProduct from "@/Components/Front-End/TrendingProduct";

export default function Home() {
    const [showCart, setShowCart] = useState(false)


  return (
      <main>
        <Navbar setShowCart={setShowCart}/>
        {showCart && <Cart setShowCart={setShowCart}/>}
        {/* <h1>hi</h1> */}
        <Hero/>
        <TrendingProduct/>
      </main>
  );
}

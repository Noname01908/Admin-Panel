"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface IProduct{
    _id: string,
    name: string,
    img_src: string,
    fileKey: string,
    category: string,
    price: number
}

const TrendingProduct = () => {
    const [products, setProducts] = useState([])
    //
    useEffect(() => {
        axios.get('/api/get_products')
        .then((res) => {
            setProducts(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    //
  return (
    <div className='container mt-32'>
        <div className='sm:flex justify-between items-center'>
            <h2 className='text-4xl font-medium'>Trending Products</h2>
            <div className='text-gray-500 flex text-xl mt-4 sm:mt-0'>
                <div className='text-black'>New</div>
                <div>Feature</div>
                <div>Top Sellers</div>
            </div>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4 mt-8'>
            {products.map((product: IProduct) => (
                <div key={product._id} className='bg-yellow-100 shadow-md p-4'>
                    <img src={product.img_src} alt={product.name} className='h-[200px] w-full object-cover'/>
                    <h3 className='text-xl font-medium mt-4'>{product.name}</h3>
                    <p className='text-gray-500'>${product.price}.00</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TrendingProduct
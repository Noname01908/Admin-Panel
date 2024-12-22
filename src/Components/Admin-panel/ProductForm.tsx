"use client"
// komponen ini untuk mengisi data atau menambahkan produk baru ke database
import { setLoading } from '@/redux/features/loadingReducer';
import { useAppDispatch } from '@/redux/hook';
import { makeToast } from '@/utils/helper';
import { UploadButton } from '@/utils/uploadthing';
import axios from 'axios';
import Image from 'next/image';
import { NextResponse } from 'next/server';
import React, { FormEvent, useState } from 'react'

interface IPayload{
    img_src: string | null;
    fileKey: string | null;
    name: string;
    category: string;
    price: string;
}

const ProductForm = () => {
    const [payload, setPayload] = useState<IPayload>({
        img_src: null,
        fileKey: null,
        name: "",
        category: "",
        price: ""
    })
    //
    const dispatch = useAppDispatch()
    //
    const handlerSubmit = (e: FormEvent) => {
        e.preventDefault()
        //
        dispatch(setLoading(true))
        //
        axios.post("/api/add_product", payload).
        then((res) => {
            makeToast("Product Added")
            setPayload({
                img_src: null,
                fileKey: null,
                name: "",
                category: "",
                price: "",
            })
        }).
        catch((err) => makeToast("Eror"))
        .finally(() => dispatch(setLoading(false)))
    }
    //
  return (
     <form className='flex flex-col gap-4' onSubmit={handlerSubmit}>
        <Image className='max-h-[300px] w-auto object-contain rounded-md' 
         src={payload.img_src ? payload.img_src : "/TestUI2.png"} 
         width={800}
         height={500}
         alt='Product'
        />
        <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setPayload({
            ...payload,
            img_src: res[0]?.url,
            fileKey: res[0]?.key,
          })
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <div>
        <label className='block ml-1'>Product Name</label>
        <input className='bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md' type="text" 
         value={payload.name ?? ""} onChange={(e) => setPayload({...payload, name: e.target.value})} required/>
      </div>
      <div>
        <label className='block ml-1'>Product Category</label>
        <input className='bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md' type="text" 
         value={payload.category ?? ""} onChange={(e) => setPayload({...payload, category: e.target.value})} required/>
      </div>
      <div>
        <label className='block ml-1'>Product Price</label>
        <input className='bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md' type="text" 
         value={payload.price ?? ""} onChange={(e) => setPayload({...payload, price: e.target.value})} required/>
      </div>
      <div className='flex justify-end '>
        <button className='bg-pink text-white px-8 py-2 rounded-md'>Add Product</button>
      </div>
     </form>
  )
}

export default ProductForm
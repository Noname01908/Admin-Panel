import { setLoading } from '@/redux/features/loadingReducer'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { makeToast } from '@/utils/helper'
import axios from 'axios'
import { NextResponse } from 'next/server'
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

interface PropsType{
    setOpenPopUp: Dispatch<SetStateAction<boolean>>
    setUpdateTable: Dispatch<SetStateAction<boolean>>
}

const PopUp = ({setOpenPopUp, setUpdateTable}: PropsType) => {
    const productData = useAppSelector((state) =>  state.productReducer)
    const dispatch = useAppDispatch()
    //
    const [inputData, setInputData] = useState({
        name: productData.name,
        category: productData.category,
        price: productData.price,
    })
    //
    //
    const handlerSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(setLoading(true))
        console.log("Endpoint URL:", `/api/edit_product/${productData._id}`);
        console.log("Request Data:", inputData);
        //
        axios.put(`/api/edit_product/${productData._id}`, inputData)
        .then((res) =>{
            makeToast("Product Updated Success")
            // console.log({productData})
            setUpdateTable((prevState) => !prevState)
        })
        .catch((err) => NextResponse.json(err))
        .finally(() => {
            dispatch(setLoading(false))
            setOpenPopUp(false)
        });
    }
  return (
    <div className='flex top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
        <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
            {/* <h2>{productData._id}</h2> */}
            <IoIosCloseCircleOutline className='absolute text-2xl right-0 top-0 m-4 cursor-pointer hover:text-red-500' 
            onClick={() => setOpenPopUp(false)}
            />
            <h2 className='text-2xl -mt-3'>Edit Product</h2>
            <form className='mt-6 w-fit space-y-4 mx-auto' onSubmit={handlerSubmit}>
                <input className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit'
                type='text'
                placeholder='Name product'
                value={inputData.name}
                onChange={(e) => setInputData({...inputData, name: e.target.value})}
                required
                />
                <input className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit'
                type='text'
                placeholder='Category product'
                value={inputData.category}
                onChange={(e) => setInputData({...inputData, category: e.target.value})}
                required
                />
                <input className='border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit'
                type='text'
                placeholder='Price product'
                value={inputData.price}
                onChange={(e) => setInputData({...inputData, price: e.target.value})}
                required
                />
                <div className='flex justify-end'>
                    <button className='bg-accent block text-white px-8 py-2 rounded-lg self-center'>
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PopUp
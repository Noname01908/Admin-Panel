import { IProduct } from '@/app/AdminPanel/Dashboard/page';
import { setProduct } from '@/redux/features/productSlice';
import { useAppDispatch } from '@/redux/hook';
import React, { SetStateAction, Dispatch } from 'react';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Image from 'next/image';

interface Propstype{
    srNo: number;
    setOpenPopUp: Dispatch<SetStateAction<boolean>>
    setUpdateTable: Dispatch<SetStateAction<boolean>>
    product: IProduct
}

const ProductRow = ({srNo, setOpenPopUp, setUpdateTable, product}: Propstype) => {
    const dispatch = useAppDispatch()
    //
    const onEdit = () => {
        dispatch(setProduct(product))
        setOpenPopUp(true)
    }
    //
    const onDelete = () => {

    }
    //
    //
    return (
        <tr>
            <td>
                <div>{srNo}</div>
            </td>
            <td>
                <div>{product.name}</div>
            </td>
            <td>
                <div>{product.price}</div>
            </td>
            <td className='py-2'>
                <Image 
                src={product.img_src} 
                width={50} 
                height={50} 
                alt="Product Image"/>
            </td>
            <td>
                <div className='text-2xl flex items-center gap-2 text-gray-500'>
                    <CiEdit className='cursor-pointer hover:text-black' onClick={onEdit}/>
                    <RiDeleteBin5Line className='text-[20px] cursor-pointer hover:text-red-600' onClick={onDelete}/>
                </div>
            </td>
        </tr>
    )
}

export default ProductRow
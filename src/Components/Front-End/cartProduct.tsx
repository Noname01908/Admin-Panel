import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface PropsType{
  id: string,
  img: string,
  title: string,
  price: number,
  quantity: number
}

const CartProduct: React.FC<PropsType> = ({id, img, title, price, quantity}) => {
  const dispatch = useAppDispatch()

  return (
    <div className='flex items-center justify-between'>
      <div className="flex items-center gap-4">
        <img src={img} alt={title} className='h-[80px]'/>
        <div className='space-y-2'>
          <h3 className='font-medium'>{title}</h3>
          <p className='text-gray-500 text-[14px]'>{quantity} x ${price}.00</p>
        </div>
      </div>
      <IoIosCloseCircleOutline className='text-[24px] cursor-pointer' onClick={() => dispatch(removeFromCart(id))}/>
    </div>
  )
}
export default CartProduct
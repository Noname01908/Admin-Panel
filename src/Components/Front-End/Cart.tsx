import { useAppSelector } from '@/redux/hook'
import React, { Dispatch, SetStateAction } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import CartProduct from './cartProduct'

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ setShowCart }: PropsType) => {
    const products = useAppSelector((state) => state.cartReducer);

    const GetTotal = () => {
        return products.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="bg-black/50 w-full min-h-screen fixed left-0 top-0 z-50 overflow-y-auto">
            <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 shadow-lg">
                <IoIosCloseCircleOutline
                    className="absolute right-6 top-6 text-2xl text-gray-600 cursor-pointer hover:text-gray-800"
                    onClick={() => setShowCart(false)}
                />
                <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h3>
                <div className="mt-6 space-y-4">
                    {products.map((item: any) => (
                        <CartProduct
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    ))}
                </div>
                <div className="flex justify-between items-center font-medium text-lg py-4 border-t border-gray-200 mt-6">
                    <h3 className="text-gray-600">Total:</h3>
                    <span className="text-black">${GetTotal()}.00</span>
                </div>
                <button className="w-full bg-black text-white py-3 rounded-full text-center mt-4 hover:bg-gray-800 transition">
                    View Cart
                </button>
                <button className="w-full bg-black text-white py-3 rounded-full text-center mt-2 hover:bg-gray-800 transition">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;

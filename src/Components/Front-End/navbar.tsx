import { useAppSelector } from '@/redux/hook'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ setShowCart }: PropsType) => {
    const cartCount = useAppSelector((state) => state.cartReducer.length)

    return (
        <div className="pt-4 bg-white top-0 sticky z-30 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo and Search */}
                    <div className="flex items-center space-x-4">
                        <Image src="/Talisman.png" alt="User" width={32} height={32} />
                        <h1 className="text-2xl md:text-4xl font-bold">My WEB</h1>
                        <div className="hidden lg:flex items-center w-full max-w-[500px] space-x-2">
                            <input
                                type="text"
                                placeholder="Search Products"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                            <button className="bg-accent text-white px-4 py-2 rounded-md">
                                <Image src="/Talisman.png" alt="Search" width={24} height={24} />
                            </button>
                        </div>
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center space-x-6">
                        {/* User Account */}
                        <div className="hidden md:flex items-center space-x-3">
                            <div className="rounded-full border-2 border-gray-300 text-gray-500 text-2xl w-12 h-12 flex items-center justify-center">
                                <Image src="/Talisman.png" alt="User" width={32} height={32} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Hello, Sign in</p>
                                <p className="text-base font-medium">Your Account</p>
                            </div>
                        </div>

                        {/* Cart */}
                        <button
                            onClick={() => setShowCart(true)}
                            className="relative flex items-center space-x-2"
                        >
                            <span className="text-lg font-semibold">Cart</span>
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                {cartCount}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

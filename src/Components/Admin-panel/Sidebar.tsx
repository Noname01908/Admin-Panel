import React from 'react'

import { MdDashboard, MdManageAccounts } from "react-icons/md"
import { GrTransaction } from "react-icons/gr"
import { IoAnalytics, IoSettings } from "react-icons/io5"
import { RiShoppingCartLine } from "react-icons/ri"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const menus = [
  {
      title: "Dashboard",
      icon: <MdDashboard/>,
      href: "/AdminPanel/Dashboard",
  },
  {
      title: "Products",
      icon: <RiShoppingCartLine/>,
      href: "/AdminPanel/Product",
  },
  {
      title: "Account",
      icon: <MdManageAccounts/>,
      href: "#",
  },
  {
      title: "Transactions",
      icon: <GrTransaction/>,
      href: "#",
  },
  {
      title: "Analitics",
      icon: <IoAnalytics/>,
      href: "#",
  },
  {
      title: "Settings",
      icon: <IoSettings/>,
      href: "#",
  },
]

const Sidebar = () => {
  const pathName = usePathname()
  //
  return (
    <div className='bg-white w-[300px] min-h-screen p-4 shrink-0'>
      <div className='flex items-center gap-4'>
        {/* <img className='size-12 rounded-lg' alt='logo'/> */}
        <Image className='size-12 rounded-lg' src={"/Talisman.png"} width={100} height={100} alt='logo Guwh'/>
        <h2 className='text-[20px] font-semibold'>Web Gueh</h2>
      </div>
      {/*  */}
      <ul className='space-y-4 mt-6'>
        {menus.map((menu) => (
          <Link key={menu.title} href={menu.href} className={`flex gap-2 items-center p-4 rounded-lg 
          cursor-pointer hover:bg-pink hover:text-white 
          ${pathName === menu.href ? "bg-pink text-white" : "bg-gray-200"}`}>
            <div className='text-[20px]'>{menu.icon}</div>
            <p>{menu.title}</p>
          </Link>
      ))}
      </ul>
    </div>
  )
}

export default Sidebar
"use client"
import Loader from '@/Components/Admin-panel/Loader'
import Login from '@/Components/Admin-panel/Login'
import { useAppSelector } from '@/redux/hook'
import { useSession } from 'next-auth/react'
import React from 'react'
import Sidebar from '@/Components/Admin-panel/Sidebar'

const Layout = ({children}: {children: React.ReactNode}) => {
  const isLoading = useAppSelector (store => store.loadingReducer)
  const {data: session} = useSession()
  //
  if(!session?.user){
    return <Login/>
  }

  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full h-full'>
        {/* <Navbar/> */}
        <div className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>
            {children}
        </div>
      </div>
      {isLoading && <Loader/>}
    </div>
  )
}

export default Layout
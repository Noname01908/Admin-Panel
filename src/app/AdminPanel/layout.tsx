"use client"
import Login from '@/Components/Admin-panel/Login'
import { useAppSelector } from '@/redux/hook'
import { useSession } from 'next-auth/react'
import React from 'react'

const Layout = () => {
  const isLoading = useAppSelector (store => store.loadingReducer)
  const {data: session} = useSession()
  //
  if(!session?.user)
    return <Login/>

  return (
    <div>

    </div>
  )
}

export default Layout
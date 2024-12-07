"use client"
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface Propstype{
    children: ReactNode
}

const AuthPanel = ({children}: Propstype) => {
  return (
        <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthPanel
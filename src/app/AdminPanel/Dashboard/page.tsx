"use client"
import { setLoading } from '@/redux/features/loadingReducer'
import { useAppDispatch } from '@/redux/hook'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import Layout from '../layout'
export interface IProduct{
  id: string
  title: string
  img: string
  price: number
  quantity: number
}

const Dashboard = () => {
  const [products, setProducts] = useState([])
  const [openpopup, setOpenPopUp] = useState(false)
  const [updateTable, setUpdateTable] = useState(false)
  //
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    //
    axios.get("/api/get_products").then((res) => setProducts(res.data)).
    catch(err => console.log(err)).finally(() => dispatch(setLoading(false)))
  }, [updateTable])
  //
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
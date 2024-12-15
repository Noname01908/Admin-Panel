"use client"
import ProductRow from '@/Components/Admin-panel/ProductRow'
import { setLoading } from '@/redux/features/loadingReducer'
import { useAppDispatch } from '@/redux/hook'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import Layout from '../layout'
export interface IProduct{
  _id: string,
  img_src: string,
  fileKey: string,
  name: string,
  price: string,
  category: string,
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
    axios.get("/api/get_products?cache_bust=")
    .then((res) => {
      setProducts(res.data)
      // console.log(res.data)
    }).
    catch((err) => console.log(err)).
    finally(() => dispatch(setLoading(false)))
  }, [updateTable])
  //
  //console.log(products)
  //
  return (
    <div>
      <div className='bg-white h-[calc(100vh - 96px)] rounded-lg p-4'>
        <h2 className='text-3xl'>All Products</h2>
        {/*  */}
        <div className='mt-4 h-[calc(100vh-180px)] overflow-y-auto'>
            <table className='w-full'>
              <thead>
                <tr className='text-gray-500 border-t border-[#ececec]'>
                  <th>SR No.</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Picture</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product: IProduct, index) => (
                    <ProductRow
                      key={product._id}
                      srNo={index + 1}
                      setOpenPopUp={setOpenPopUp}
                      setUpdateTable={setUpdateTable}
                      product={product}
                    />
                  ))
                ) : (
                  <tr>
                    {/* <td>No products available</td> */}
                  </tr>
                )}
              </tbody>
            </table>
        </div>
      </div>
      {/* {openpopup && (
        <Popup setOpenPopUp={setOpenPopUp} setUpdateTable={setUpdateTable}/>
      )} */}
    </div>
  )
}

export default Dashboard
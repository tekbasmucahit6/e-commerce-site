import React, { useEffect } from 'react'
import fetchHandle from '../../hooks/useFetchGet'

export default function NavBar() {
    const {data,loading,getData} = fetchHandle()
    useEffect(()=>{
        getData({baseUrl:"https://fakestoreapi.com/products",endPoint:"/categories"})
    },[])
  return (
    <div className='w-full flex justify-center items-center bg-wightGray'>
        <div className='templateWidth'>
            <div className='flex justify-center items-center'>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

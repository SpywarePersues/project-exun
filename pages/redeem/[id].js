/* eslint-disable @next/next/no-img-element */
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import { useRouter as UseRouter } from 'next/router'
import { db } from '../../firebaseConfig'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

function redeemScreen() {
    const router = UseRouter()
    const { id } = router.query;

    const databaseRef = collection(db, 'Deal of the day items')
    const [firedata, setFiredata] = UseState([])
    const [currentData, setCurrentData] = UseState({})

    UseEffect(() => {
        getData()
    }, [])

    const htmlJSX = (
        <div className='glassmorph w-10/12 mx-auto my-4 p-4 '>
            <div className=''>
                <img src={currentData.image} className="w-11/12 mx-auto rounded-lg" alt="" />
                <h1 className='font-Bebas md:text-black text-white text-5xl my-4 mt-6 mx-12 text-center'>{currentData.name}</h1>
                <p className='md:text-black text-white font-Bebas text-xl my-4 mx-12 text-center'>{currentData.description}</p>
            </div>
            <button className="font-Bebas text-center mt-4 bg-gradient-to-r from-blue-500 to-pink-600 px-5 text-gray-200 w-fit mx-auto block py-2 my-3 rounded-md text-xl">Redeem</button>
        </div>
    )

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }

    UseEffect(() =>{
        firedata.map((data) => {
            if(data.id == id){
                setCurrentData(data)
            }
        })


    
    }, [firedata])

    console.log(currentData)

    return (
        <div>
            <Navbar title={currentData.name} />
            <img src="../../wave-bg.png" alt="wave" className="absolute top-0 -z-10 h-screen"/>
            {htmlJSX}
        </div>
    )
}

export default redeemScreen
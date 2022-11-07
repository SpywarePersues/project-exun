/* eslint-disable @next/next/no-img-element */
import { db } from '../../firebaseConfig'
import { arrayUnion, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import Navbar from "../../components/Navbar";
import { useRouter as UseRouter } from 'next/router';
import Link from 'next/link';

export default function index(){
    const router = UseRouter()
    const databaseRef = collection(db, 'Deal of the day items')
    const [firedata, setFiredata] = UseState([])
    const [email, setEmail] = UseState("")
    
    UseEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }

    const [token, setToken] = UseState()

    UseEffect(() => {
        setToken(localStorage.getItem('Token'))
    }, [])

    UseEffect(() => {
        setEmail(localStorage.getItem('Email'))
    }, [])

    return(
        <div>
            <Navbar title="Redeem" />
            <img src="./wave-bg.png" alt="wave" className="absolute top-0 -z-10 h-screen"/>
            <h1 className='text-6xl font-Bungee text-center pb-5 pt-5 font-semibold'>Deal of the Day</h1>
            {token ? (<div className='my-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
                {firedata.map((data) => {
                    return(
                        <div key={data.id} className="glassmorph md:mx-10 mx-4 w-11/12 rounded-lg hover:scale-105 transition-scale duration-300 my-3 p-4">
                            <img src={data.image} className="rounded-md" alt='' />
                            <h1 className='md:text-4xl font-bold my-2 mt-4 mx-4 font-Bebas text-2xl text-gray-300'>{data.name}</h1>
                            <h1 className='my-4 mx-4 text-gray-300 font-Bebas md:text-xl'>💰 {data.price}</h1>
                            <button className="font-Bebas text-center button mt-2 bg-gradient-to-r from-blue-500 to-pink-600 px-5 text-gray-200 w-fit mx-4 py-2 my-3 rounded-md text-xl" onClick={async () => {
                                const docRef = await updateDoc(doc(db, 'accounts', `${localStorage.getItem('Email')}`), {
                                    Username: localStorage.getItem('Name'),
                                    Balance: `1000` - data.price,
                                    email: localStorage.getItem('Email'),
                                    Purchases: arrayUnion({name: data.name, image: data.image, price: data.price})
                                });
                            }}>REDEEM</button>
                        </div>
                    )
                })}
            </div>) : (<h1 className='text-6xl font-Bungee text-center'>Login first to redeem things.</h1>)}
        </div>
    )
}
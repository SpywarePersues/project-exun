/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Footer from "../components/Footer";

export default function Dashboard(){

    const databaseRef = collection(db, 'accounts')
    const [firedata, setFiredata] = useState()
    const [mounted, setMounted] = useState(false)
    const [userBalance, setUserbalance] = useState(0)
    const [userPurchases, setUserPurchases] = useState()

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                if(data.data().email === localStorage.getItem('Email')){
                    setMounted(true)
                    setUserbalance(data.data().Balance)
                    setUserPurchases(data.data().Purchases)
                }
            }))
        })
    }
    useEffect(() => {
        getData()
        if(localStorage.getItem('Rank')){
            console.log('Rank found')
        } else {
            localStorage.setItem('Rank', Math.floor(Math.random() * 10)+1)
        }
    }, [])

    const [token, setToken] = useState()

    useEffect(() => {
        setToken(localStorage.getItem('Token'))
    }, [])


    return(
        <div className="">
            <Navbar title="Dashboard" />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            {
                mounted ? 
                token ? 
                <div className="lg:flex mx-2 lg:mx-5 font-Inter">
                    <div className="glassmorph lg:w-6/12 py-5 pl-5 mx-auto my-10">
                        <div className="lg:flex">
                            <img src={localStorage.getItem('PFP')} className="w-3/12 mx-auto lg:mx-0 rounded-full lg:rounded-lg"/>
                            <div className="lg:px-5 px-2">
                                <h1 className="font-Bebas text-5xl text-white mt-4">{localStorage.getItem('Name')}</h1>
                                <h1 className="font-Bebas text-2xl text-white mb-4 mt-1">{localStorage.getItem('Email')}</h1>
                                <h1 className="font-Bebas text-xl text-white mt-1">Balance: <img src="./coin.gif" className="w-5 inline-flex"/> {userBalance}</h1>
                                <h1 className="font-Bebas text-xl text-white mt-1">Rank: {localStorage.getItem('Rank')}</h1>
                            </div>
                        </div>
                        <div className="pt-10">
                            <p className="text-center font-Bebas text-5xl text-white mb-6">Purchases</p>
                            <div className="lg:h-64 lg:overflow-y-scroll purchases overflow-x-hidden" id="style3">
                                {
                                    userPurchases.map((data) => {
                                        return(
                                        <div className="flex py-2" key={data.price}>
                                            <img src={data.image} className="w-32 h-22 rounded-md" />
                                            <div className="px-2">
                                                <p className="font-Bebas text-3xl text-white">{data.item}</p>
                                                <p className="font-Bebas text-lg text-white">Bought for: <img src="./coin.gif" className="w-5 inline-flex"/> {data.price}</p>
                                            </div>
                                        </div>
                                    )})
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>You need to login first</div> 
                : 
                <div className="flex flex-row justify-between">
                    <img src="https://images.squarespace-cdn.com/content/v1/57583088356fb0568d991014/1550527646302-AF56GQDTYTJSDGL8OPO8/Loading.gif" className="w-fit mx-auto"/>
                </div>
            }
            <Footer />
        </div>
    )
}
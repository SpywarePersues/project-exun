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
        <div>
            <Navbar title="Dashboard" />
            <img src="./wave-bg.png" alt="wave" className="absolute top-0 -z-10 h-screen"/>
            {
                mounted ? 
                token ? 
                <div className="lg:flex font-Inter">
                    <div className="glassmorph lg:w-5/12 py-5 pl-5 mx-auto">
                        <div className="lg:flex">
                            <img src={localStorage.getItem('PFP')} className="w-4/12 mx-auto lg:mx-0 rounded-full lg:rounded-lg"/>
                            <div className="lg:px-5 px-2">
                                <h1 className="font-Bebas text-4xl text-white mt-4">{localStorage.getItem('Name')}</h1>
                                <h1 className="font-Bebas text-2xl text-white">{localStorage.getItem('Email')}</h1>
                                <h1 className="font-Bebas text-xl text-white mt-4">Balance: <img src="./coin.gif" className="w-5 inline-flex"/>{userBalance}</h1>
                                <h1 className="font-Bebas text-xl text-white">Rank: {localStorage.getItem('Rank')}</h1>
                            </div>
                        </div>
                        <div className="pt-10">
                            <p className="text-center text-white font-Bebas text-3xl">Purchases</p>
                        </div>
                    </div>
                </div>
                :
                <div>You need to login first</div> 
                : 
                <div className="text-center text-6xl text-white font-Bebas">Loading...</div>
            }
            <Footer />
        </div>
    )
}
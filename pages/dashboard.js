import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Footer from "../components/Footer";
import GamesPlayed from "../components/charts/GamesPlayed";
import CoinsGraph from "../components/charts/CoinsGraph";

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
                <div className="lg:flex mx-2 lg:mx-5 font-Inter text-gray-100">
                    <div className="glassmorph lg:w-[29%] py-5 pl-5">
                        <div className="lg:flex">
                            <img src={localStorage.getItem('PFP')} className="w-28 mx-auto lg:mx-0 rounded-full lg:rounded-lg"/>
                            <div className="lg:px-5 px-2">
                                {localStorage.getItem('Name')}
                                <br></br>
                                <p>{localStorage.getItem('Email')}</p>
                                Balance: <img src="./coin.gif" className="w-5 inline-flex"/> {userBalance}
                                <br></br>
                                Rank: {localStorage.getItem('Rank')}
                            </div>
                        </div>
                        <div className="pt-10">
                            <p className="text-center font-Bebas text-3xl mb-3">Purchases</p>
                            <div className="lg:h-[300px] lg:overflow-y-scroll purchases overflow-x-hidden" id="style3">
                                {
                                    userPurchases.map((data) => {
                                        return(
                                        <div className="flex py-2" key={data.price}>
                                            <img src={data.image} className="w-16 h-12 rounded-sm" />
                                            <div className="px-2">
                                                <p>{data.item}</p>
                                                <p>Bought for: <img src="./coin.gif" className="w-5 inline-flex"/> {data.price}</p>
                                            </div>
                                        </div>
                                    )})
                                }
                            </div>
                        </div>
                    </div>
                        <GamesPlayed />
                        <CoinsGraph />
                </div>
                :
                <div>You need to login first</div> 
                : 
                <div>Loading...</div>
            }
        </div>
    )
}
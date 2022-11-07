import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

export default function Dashboard(){

    const databaseRef = collection(db, 'accounts')
    const [firedata, setFiredata] = useState([])
    
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                if(data.data().email === localStorage.getItem('Email')){
                    return data.data().Balance
                }
            }))
        })
    }

    const [token, setToken] = useState()

    useEffect(() => {
        setToken(localStorage.getItem('Token'))
    }, [])


    return(
        <div>
            <Navbar title="Dashboard" />
            {
                token ? 
                <div>
                    <img src="./wave-bg.png" alt="wave" className="absolute top-0 -z-10 h-screen"/>
                    <di className="">
                        <div className="profile-sidebar glassmorph p-4 w-4/12 mx-auto">
                            <img src={localStorage.getItem("PFP")} className="rounded-lg mx-auto" />
                            <p className="text-white font-Bebas text-4xl text-center my-4">{localStorage.getItem("Name")}</p>
                            <p className="text-white font-Bebas text-2xl text-center">💰 {firedata}</p>
                        </div>
                    </di>
                </div>
                :
                <div>You need to login first</div>
            }
        </div>
    )
}
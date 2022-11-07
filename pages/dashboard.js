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
            <Navbar />
            {
                token ? 
                <div>
                    <img src="./wave-bg.png" alt="wave" className="absolute top-0 -z-10 h-screen"/>
                    <div>
                        <div className="profile-sidebar">
                            <img src={localStorage.getItem("PFP")} />
                            <p>{localStorage.getItem("Name")}</p>
                            <p>{firedata}</p>
                        </div>
                    </div>
                </div>
                :
                <div>You need to login first</div>
            }
        </div>
    )
}
/* eslint-disable @next/next/no-img-element */
import react, { useEffect, useEffect as UseEffect, useState, useState as UseState } from "react";
import { app, db } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter as UseRouter } from "next/router";
import Navbar from '../components/Navbar'
import { collection, getDocs, addDoc, docRef, doc, setDoc} from 'firebase/firestore'

function login() {
    const [token, setToken] = UseState("")
    const [email, setEmail] = UseState("")
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const router = UseRouter()
    const [firedata, setFiredata] = UseState([])
    
    const databaseRef = collection(db, 'accounts')
    let registered = false

    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((response) => {
            localStorage.setItem('Token', response.user.accessToken)
            localStorage.setItem('Name', response.user.displayName)
            localStorage.setItem('PFP', response.user.photoURL)
            localStorage.setItem('Email', response.user.email)
        
            const getData = async () => {
                await getDocs(databaseRef)
                .then((response) => {
                    setFiredata(response.docs.map((data) => {
                        console.log(data.data())
                        if(data.data().email === localStorage.getItem('Email')){
                            registered = true
                            console.log('found')
                        }
                    }))
                })
                const registerDetails = async () => {
                    const docRef = await setDoc(doc(db, 'accounts', `${localStorage.getItem('Email')}`), {
                            Username: localStorage.getItem('Name'),
                            Balance: 1000,
                            email: localStorage.getItem('Email'),
                            Purchases: []
                        });
                }
                registered ? console.log('registered') : registerDetails()

            }
            getData()
            router.push('/')
        })
    }

    UseEffect(() => {
        setToken(localStorage.getItem('Token'))
        setEmail(localStorage.getItem('Email'))
    }, [])

    const manageSignOut = () => {
            localStorage.clear()
            router.reload()
    }


    return (
        <div>
            <Navbar title="Login / Profile" />
            <img src="./wave-bg.png" alt="wave" className="absolute top-0 -z-10 h-screen"/>
            {!token ? (
                <div><h1 className='text-6xl font-Bungee text-center pb-5 pt-5 font-semibold'>Login</h1>
                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-14">
                    <div class="rounded overflow-hidden shadow-lg glassmorph mx-auto w-5/12">
                        <img class="w-24 block mx-auto my-auto mt-5 mb-2 rounded-full border-solid border-green-600 border-4" src="https://cdn.discordapp.com/attachments/910730837996224584/1028238445778309171/media_discordapp_net-unknown_1.png" alt="Google" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl text-center">Google</div>
                        </div>
                            <button className="bg-gradient-to-r from-blue-500 to-pink-600 px-5 text-gray-200 w-fit mx-auto block py-2 my-3 rounded-md" onClick={signUpWithGoogle}>Login</button>
                        </div>
                    </div>
                </div>
            ) : (<div className="user-container items-center w-6/12 my-20 mx-auto flex justify-center glassmorph p-10 rounded-lg">
            <div className="glassmorph rounded-full p-3">
                <img className="outline-none rounded-lg"  src={localStorage.getItem("PFP")} style={{width:"200px"}} alt=""/>
            </div>  
            <div className="px-10">
                <p className="text-gray-800 font-Bebas text-2xl">Howdy, {localStorage.getItem("Name")}</p>
                <p className="pt-2 text-gray-800 font-Bebas text-xl">How is your day going?</p>
                <button className="font-Bebas text-center button mt-4 lg:ml-10 bg-gradient-to-r from-blue-500 to-pink-600 px-5 text-gray-200 w-fit mx-auto block py-2 my-3 rounded-md text-xl" onClick={manageSignOut}>Logout</button>
            </div>
            </div>)}
        </div>
    )
}

export default login
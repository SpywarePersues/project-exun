import { useEffect as UseEffect, useState as UseState } from "react"
import Link from 'next/link';
import Head from 'next/head'
import { useRouter } from 'next/router';

export default function Navbar({ title }){
    const [token, setToken] = UseState("")
    const router = useRouter();

    UseEffect(() => {
        setToken(localStorage.getItem('Token'))
    }, [])

    return(
        <div className="lg:flex justify-between lg:w-9/12 py-10 mx-auto font-Bebas lg:text-xl text-center lg:text-left">
            <Head>
                <title>{title} - RETREND, Back to 80s</title>
            </Head>
            <div className=""><p className="text-4xl font-semibold">RETREND</p>Back to 80s</div>
            <div>
                <ul className="flex justify-evenly">
                    <Link href={'/'}><li className={router.asPath === '/' ? "lg:px-8 underline font-semibold" : "lg:px-8"}>Home</li></Link>
                    <Link href={'/dashboard'}><li className={router.asPath === '/dashboard' ? "lg:px-8 underline font-semibold" : "lg:px-8"}>Dashboard</li></Link>
                    <Link href={'/redeem'}><li className={router.asPath === '/redeem' ? "lg:px-8 underline font-semibold" : "lg:px-8"}>Redeem</li></Link>
                    <Link href={'/features'}><li className={router.asPath === '/features' ? "lg:px-8 underline font-semibold" : "lg:px-8"}>Features</li></Link>
                    <Link href={'/gamebar'}><li className={router.asPath === '/gamebar' ? "lg:px-8 underline font-semibold" : "lg:px-8"}>Game Bar</li></Link>
                </ul>
            </div>
            <div className="">
            {token ? (<Link href={'/login'}><p className="bg-gradient-to-r pt-1 from-blue-500 to-pink-600 px-5 rounded-sm text-gray-200 w-fit mx-auto">{localStorage.getItem('Name')}</p></Link>) : (<Link href={'/login'}><p className="bg-gradient-to-r pt-1 from-blue-500 to-pink-600 px-5 rounded-sm text-gray-200 w-fit mx-auto">Login</p></Link>)}
            </div>
        </div>
    )
}
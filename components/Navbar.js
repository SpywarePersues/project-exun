import { useEffect, useState } from "react"
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar(){

    const router = useRouter();

    return(
        <div className="lg:flex justify-between lg:w-9/12 py-10 mx-auto font-Bebas lg:text-xl text-center lg:text-left">
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
                <p className="bg-gradient-to-r pt-1 from-blue-500 to-pink-600 px-5 rounded-sm text-gray-200 w-fit mx-auto">Login</p>
            </div>
        </div>
    )
}
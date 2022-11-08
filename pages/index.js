/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-gray-900 w-screen h-screen overflow-x-hidden">
      <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
      <Navbar title="Home" />

      <div>
        <div className="landing-section">
          <p className="lg:text-7xl text-3xl font-Bungee text-center text-gray-200">STAY TRENDY WITH<br></br>RETRO STYLE FUN</p>
        </div>
        <div className="lg:w-6/12 font-sans font-semibold text-gray-900  text-lg mx-auto glassmorph my-10 w-11/12">
          <p className="font-Bungee text-2xl text-center">Play.Earn.Redeem</p>
          <p className="p-2">Welcome to <span className="text-blue-700 underline">ReTrend</span>, play awesome games built almost half a decade ago, and get rewarded with our new <span className="text-pink-900 underline">digital coins</span>. Redeem your coins and get <span className="text-orange-500 underline">Premium stuffs</span> for different games.<br />Tired of playing online? We set up <span className="text-teal-800 underline">Public Outlets</span> too, do not waste a moment and visit your nearest one.</p>
          <p className="font-Bungee text-center text-2xl">#We Set The Trend</p>
        </div>
        <div className="text-center">
          <Link href={'/gamebar'}>
            <button class="relative font-Bebas text-2xl inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-blue-500 group-hover:from-pink-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Play Now!
              </span>
            </button>
          </Link>
        </div>
        <div className="invisible lg:visible flex justify-end">
          <img src="./car.gif" className="absolute bottom-10 right-10"/>
        </div>
      </div>


      <Footer />
    </div>
  )
}



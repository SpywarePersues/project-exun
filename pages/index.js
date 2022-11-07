import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="text-gray-900 w-screen h-screen">
      <img src="./wave-bg.png" className="absolute top-0 -z-10 h-screen"/>
      <Navbar />
      <Footer />
    </div>
  )
}



/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Features(){
    return(
        <div>
            <Navbar title="Features" />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            <h1 className='text-6xl md:text-7xl font-Bungee text-center pb-5 pt-5 font-semibold'>Features</h1>
            <div className="lg:flex glassmorph w-10/12 mx-auto">
                <img src="https://cdn.discordapp.com/attachments/1009496733211951111/1039524884390354974/unknown.png" className=" my-6 w-11/12 mx-auto lg:mx-4 lg:w-7/12 rounded-md" />
                <div className="text-white font-Bebas text-2xl lg:text-4xl xl:text-5xl mx-auto text-center lg:my-auto my-4">
                    <h1 className="">RETRO, still unique!!</h1>
                    <p className="text-xl font-Inter">Play those old golden games in AR/VR</p>
                </div>
            </div>
            <div className="lg:flex glassmorph w-10/12 mx-auto my-10">
            <div className="text-white font-Bebas text-2xl lg:text-4xl xl:text-5xl mx-auto text-center lg:my-auto my-4">
                    <h1 className="">Earn digitally.</h1>
                    <p className="text-xl font-Inter"></p>
                </div>
                <img src="https://www.sageworld.com/blog/wp-content/uploads/2019/06/PPPC-Weekly-Tech-Image.png" className=" my-6 w-11/12 mx-auto lg:mx-4 lg:w-7/12 rounded-md" />
            </div>
            <div className="lg:flex glassmorph w-10/12 mx-auto">
                <img src="https://addvideos.com/storage/articles/October2021/kIUwvQwmhgGQtws2q2Fd.jpg" className=" my-6 w-11/12 mx-auto lg:mx-4 lg:w-7/12 rounded-md" />
                <div className="text-white font-Bebas text-2xl lg:text-4xl xl:text-5xl mx-auto text-center lg:my-auto my-4">
                    <h1 className="">Spend them in the virtual market!</h1>
                    <p className="text-xl font-Inter"></p>
                </div>
            </div>
            <div className="lg:flex glassmorph w-10/12 mx-auto my-10">
            <div className="text-white font-Bebas text-2xl lg:text-4xl xl:text-5xl mx-auto text-center lg:my-auto my-4">
                    <h1 className="">Get detailed statistics.</h1>
                    <p className="text-xl font-Inter"></p>
                </div>
                <img src="https://cdn.discordapp.com/attachments/880762254306459658/1039535770467324005/image.png" className=" my-6 w-11/12 mx-auto lg:mx-4 lg:w-7/12 rounded-md" />
            </div>
            <div className="lg:flex glassmorph w-10/12 mx-auto">
                <img src="https://d2ugbn5gb88fyp.cloudfront.net/724402/0_0.jpg" className=" my-6 w-11/12 mx-auto lg:mx-4 lg:w-7/12 rounded-md" />
                <div className="text-white font-Bebas text-2xl lg:text-4xl xl:text-5xl mx-auto text-center lg:my-auto my-4">
                    <h1 className="">Either play online or at your nearest Retrend VR Station</h1>
                    <p className="text-xl font-Inter"></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Features(){
    return(
        <div>
            <Navbar title="Features" />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            <h1 className='text-7xl font-Bungee text-center pb-5 pt-5 font-semibold'>Features</h1>
            <div className="lg:flex glassmorph w-10/12 mx-auto">
                <img src="https://cdn.discordapp.com/attachments/910730837996224584/1039507906841825320/image.png" className=" my-6 w-11/12 mx-auto lg:mx-4 lg:w-7/12 rounded-md" />
                <h1 className="text-white font-Bebas text-2xl lg:text-4xl xl:text-5xl mx-auto text-center lg:my-auto my-4">Amazing User Experience.</h1>
            </div>
            <div className="lg:flex glassmorph w-10/12 mx-auto my-10">
                <h1 className="text-white font-Bebas text-2xl lg:text-4xl xl:text-5xl mx-auto text-center lg:my-auto my-4">Amazing User Experience.</h1>
                <img src="https://cdn.discordapp.com/attachments/910730837996224584/1039507906841825320/image.png" className=" my-6 w-11/12 mx-auto lg:mx-4 lg:w-7/12 rounded-md" />
            </div>
            <Footer />
        </div>
    )
}
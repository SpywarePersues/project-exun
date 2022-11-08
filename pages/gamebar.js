import Navbar from "../components/Navbar";

export default function GameBar(){


    return(
        <div>
            <Navbar title="Game Bar" />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
            <div className="games grid grid-cols-4 lg:w-11/12 mx-auto">
                <a href={'https://snakemaster.vercel.app/'} target="_Blank" rel="noopener">
                <div className="glassmorph hover:scale-105 m-2 transition-transform ease-in-out cursor-pointer text-center text-2xl font-Bebas">
                    <img src="https://www.coolmathgames.com/sites/default/files/snake.png" className="p-2 h-48 w-full" />
                    Play Now {`[BETA]`}
                </div>
                </a>
                <div className="glassmorph hover:scale-105 m-2 transition-transform ease-in-out cursor-pointer text-center text-2xl font-Bebas">
                    <img src="https://cdn.discordapp.com/attachments/913810426846928898/1039201946436898937/unknown.png" className="p-2 h-48 w-full" />
                    Under maintenance
                </div>
                <div className="glassmorph hover:scale-105 m-2 transition-transform ease-in-out cursor-pointer text-center text-2xl font-Bebas">
                    <img src="https://img.reality.news/img/92/36/63635871188821/0/apple-ar-prepare-rage-real-life-with-augmented-reality-flappy-bird.1280x600.jpg" className="p-2 h-48 w-full" />
                    Under maintenance
                </div>
                <div className="glassmorph hover:scale-105 m-2 transition-transform ease-in-out cursor-pointer text-center text-2xl font-Bebas">
                    <img src="https://api.time.com/wp-content/uploads/2017/06/super-mario-bros-hololens-ar.jpg" className="p-2 h-48 w-full" />
                    Under maintenance
                </div>
                <div className="glassmorph hover:scale-105 m-2 transition-transform ease-in-out cursor-pointer text-center text-2xl font-Bebas">
                    <img src="https://wallpaper.dog/large/20441629.jpg" className="p-2 h-48 w-full" />
                    Under maintenance
                </div>
                <div className="glassmorph hover:scale-105 m-2 transition-transform ease-in-out cursor-pointer text-center text-2xl font-Bebas">
                    <img src="https://media.istockphoto.com/vectors/red-rubber-stamp-icon-on-transparent-background-vector-id919303478?k=20&m=919303478&s=170667a&w=0&h=ZSA21qvRNTWeTUSTzwrZdYwdzf9VEPD2k8UE8_Y4--M=" className="p-2 h-48 w-full" />
                    More Games Coming soon
                </div>
            </div>
        </div>
    )
}
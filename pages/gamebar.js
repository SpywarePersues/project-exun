import Navbar from "../components/Navbar";

export default function GameBar(){


    return(
        <div>
            <Navbar title="Game Bar" />
            <img src="./wave-bg.png" alt="wave" className="fixed top-0 -z-10 h-screen"/>
        </div>
    )
}
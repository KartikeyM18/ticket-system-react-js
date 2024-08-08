
import { useState } from "react";
import NavBar from "./NavBar";

export function MainPage(props) {

    const [hovered, setHovered] = useState('');

    const setShowTicketSystem = props.setShowTicketSystem;

    return <div>
        <NavBar />
        <div className="flex h-screen">
            <div className={`transition-all duration-500 ${hovered === '' ? 'w-1/2' : (hovered === 'left' ? 'w-3/4' : 'w-1/4')} bg-blue-500
     flex flex-col justify-center items-center text-center`}
                onMouseEnter={() => setHovered('left')}
                onMouseLeave={() => setHovered('')}>

                <div className={`relative bg-contain bg-no-repeat bg-center transition-all duration-500 ${hovered === '' ? 'h-3/5 w-3/5' : (hovered === 'left' ? 'w-4/5 h-4/5' : 'w-2/5 h-2/5')}`} style={{ backgroundImage: "url('/penny-skateboard.png')" }}>
                </div>
                <div className="z-10 absolute">


                    <p className="text-white italic font-mont uppercase text-base">Lorem, ipsum dolor.</p>
                    <h1 className="text-8xl text-white font-mont font-bold italic uppercase">Lorem ipsum dolor sit.</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius ducimus sapiente!</p>


                    <button className="text-white border-white border-2 rounded-full px-5 py-2 mt-10" onClick={() => setShowTicketSystem(true)}>
                        Discover More -&gt;
                    </button>
                </div>
            </div>
            <div className={`transition-all duration-500 ${hovered === '' ? 'w-1/2' : (hovered === 'right' ? 'w-3/4' : 'w-1/4')} bg-yellow-500
    flex flex-col justify-center items-center text-center`}
                onMouseEnter={() => setHovered('right')}
                onMouseLeave={() => setHovered('')}
            >
                <div className={`relative bg-contain bg-no-repeat bg-center transition-all duration-500 ${hovered === '' ? 'h-3/5 w-3/5' : (hovered === 'right' ? 'w-4/5 h-4/5' : 'w-2/5 h-2/5')}`} style={{ backgroundImage: "url('/adidas-shoes.png')" }}>
                </div>
                <div className="z-10 absolute ">

                    <p className="text-white italic font-mont uppercase text-base">Lorem, ipsum dolor.</p>
                    <h1 className="text-8xl text-white font-mont font-bold italic uppercase">Lorem ipsum dolor sit.</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius ducimus sapiente!</p>


                    <button className="text-white border-white border-2 rounded-full px-5 py-2 mt-10" onClick={() => setShowTicketSystem(true)}>
                        Discover More -&gt;
                    </button>
                </div>
            </div>
        </div >
    </div>
}
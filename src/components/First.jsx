import Navbar from "./Navbar";
import {tajMahal} from '../assets/images.json'

export default function First() {
    return (
        <>
            <div className="first h-screen bg-cover bg-center" style={{backgroundImage:`url(${tajMahal})`}}>
                <Navbar />
                <div className="text-white px-11 h-[86vh] md:w-3/5 flex items-center bg-gradient-to-r from-gray-950">
                    <div>
                        <div className="">
                            <div className="text-7xl font-[Playfair]">
                                Welcome to India
                            </div>
                            <p>
                                One of the oldest civilisations in the world, Offers a captivating mosaic of multicultural experiences. From the majestic snow-capped peaks of the Himalayan to the lush tropical rain forests of the south. Immerse yourself in a land with heritage and diverse attractions.
                            </p>
                        </div>
                        <div className="mt-6 flex gap-7">
                            <button className="py-3 px-8 scale-transi hover:bg-[rgba(255,255,255,.1)] border-2 rounded-md" href="">Guidebook</button>
                            <button className="py-3 px-8 scale-transi hover:bg-[rgba(255,255,255,.1)] border-2 rounded-md" href="">Plan a Trip</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
import Navbar from "./Navbar";
import { IoHeart } from "react-icons/io5";

export default function First() {
    return (
        <>
            <div className="first w-screen h-screen bg-cover bg-center">
                <Navbar />
                <div className="px-11 pt-32 h-[86vh] md:w-3/5 bg-gradient-to-r from-gray-950">
                    <div className="text-white">
                        <div className="text-7xl font-[Playfair]">
                            Welcome to India
                        </div>
                        <p>
                            One of the oldest civilisations in the world, Offers a captivating mosaic of multicultural experiences. From the majestic snow-capped peaks of the Himalayan to the lush tropical rain forests of the south. Immerse yourself in a land with heritage and diverse attractions.
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}
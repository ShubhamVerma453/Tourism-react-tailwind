import { useState } from "react"

export default function Carousal({ slides }) {
    console.log(slides[0].url);
    const [active, setActive] = useState(0);
    const setPre = () => {
        setActive(active === 0 ? slides.length - 1 : active - 1);
    }
    const setNext = () => {
        setActive(active === slides.length - 1 ? 0 : active + 1);
    }
    return (
        <div className="">
            {slides.map((slide, index) => {
                return(
                <div key={index} className="relative text-white w-4/5 aspect-[10/5] bg-cover bg-center " style={{ backgroundImage: `url(${slide.url})` }}>
                    <div className="h-full">
                        <div className="pt-6 text-3xl font-[Playfair]">{slide.name}</div>
                        <div className="px-16">{slide.discription}</div>
                        <button className="py-1 px-4 scale-transi hover:bg-[rgba(255,255,255,.1)] border-2 rounded-md">Know More</button>
                    </div>
                </div>
                )
            })}
        </div>
    )
}
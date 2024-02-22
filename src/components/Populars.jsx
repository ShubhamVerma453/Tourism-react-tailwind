import Carousal from "./Carousal";
import {slides} from "../assets/carousal.json"
 
export default function Populars(){
    return (
        <>
        <div className="p-10 text-center">
            <div>
                <div className="text-4xl font-[Playfair]">Polular in India</div>
                <p className="text-xl">India is a home to the finest architectural heritage, serene ghats, spectacular landscapes and largest tiger reserve</p>
            </div>
            <div className="mt-6">
                <Carousal slides={slides} />
            </div>
        </div>
        </>
    )
}
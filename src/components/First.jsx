import Navbar from "./Navbar";
import { IoHeart } from "react-icons/io5";

export default function First() {
    return (
        <>
            <div className="first w-screen h-screen bg-cover bg-center">
                <Navbar />
                <div className="p-11">
                    <div>
                        Welcome to India
                    </div>
                </div>
                
            </div>
        </>
    )
}
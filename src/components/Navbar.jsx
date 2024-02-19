import icon from '../assets/favicon.ico'
import map from '../assets/map2.png'

export default function Navbar(){
    return (
        <>
        <div className="navbar py-5 px-8 h-[14vh] flex justify-between items-center">
            <div className="text-4xl font-[Playfair]">
                {/* <img src={icon} />  */}
                Incredible India
            </div>
            <div>
                <div className="flex gap-4 items-center">
                <a href="">Destinations</a>
                <a href="">Things to Do</a>
                <a href="">Calander</a>
                <a href=''><img className='w-[40px]' src={map} alt="map" /></a>
                </div>
            </div>
        </div>
        </>
    )
}
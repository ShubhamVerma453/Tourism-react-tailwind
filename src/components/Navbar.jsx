import map from '../assets/map2.png'

export default function Navbar(){
    return (
        <>
        <div className="navbar py-5 px-8 h-[14vh] flex justify-between items-center">
            <div className="text-4xl font-[Playfair]">
                Incredible India
            </div>
            <div>
                <div className="flex gap-4 items-center">
                <a className="scale-transi" href="">Destinations</a>
                <a className="scale-transi" href="">Things to Do</a>
                <a className="scale-transi" href="">Calander</a>
                <a className="scale-transi" href=''><img className='w-[40px]' src={map} alt="map" /></a>
                </div>
            </div>
        </div>
        </>
    )
}
import icon from '../assets/favicon.ico'

export default function Navbar(){
    return (
        <>
        <div className="navbar py-5 px-8 flex justify-between items-center">
            <div className="text-4xl">
                {/* <img src={icon} />  */}
                Incredible India
            </div>
            <div>
                <div className="flex gap-3">
                <a href="">Destinations</a>
                <a href="">Things to Do</a>
                <a href="">Calander</a>
                </div>
            </div>
        </div>
        </>
    )
}
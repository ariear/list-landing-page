const Nav = () => {
    return (
        <nav className="w-full flex justify-between py-2 px-16 fixed top-4 z-20">
            <aside className="bg-secondary bg-opacity-5 backdrop-blur-md rounded-full py-2 px-4">
                <img 
                    width={140}
                    src="/icons/logo.png"
                    alt="logo"
                />
            </aside>
            <aside className="bg-secondary bg-opacity-5 backdrop-blur-md rounded-full pl-12 pr-4">
                <ul className="h-full flex items-center font-bai-jamjuree font-light">
                    <li className="mr-16"><a href="#home">Home</a></li>
                    <li className="mr-16"><a href="#clients">Clients</a></li>
                    <li className="mr-16"><a href="#services">Services</a></li>
                    <li className="mr-16"><a href="#projects">Projects</a></li>
                    <li className="mr-12"><a href="#about-us">About us</a></li>
                    <li className="bg-secondary text-primary font-semibold rounded-full py-2 px-5"><a href="#lets-meet">LET'S MEET</a></li>
                </ul>
            </aside>
        </nav>
    )
}

export default Nav
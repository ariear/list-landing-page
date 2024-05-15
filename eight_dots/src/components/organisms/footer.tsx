const Footer = () => {
    const marquee = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <nav>
            <div className="flex flex-col items-center mb-10">
                <img src="/icons/logo-gede.png" className="w-[200px] mb-6" alt="" />
                <div className="w-max bg-secondary bg-opacity-5 backdrop-blur-md rounded-full py-4 px-20 mb-10">
                    <ul className="flex items-center font-bai-jamjuree font-light">
                        <li className="mr-12"><a href="#home">Home</a></li>
                        <li className="mr-12"><a href="#services">Services</a></li>
                        <li className="mr-12"><a href="#projects">Projects</a></li>
                        <li><a href="#about-us">About us</a></li>
                    </ul>
                </div>
                <div className="flex text-center font-bai-jamjuree font-light mb-10">
                    <div className="mr-24">
                        <p className="mb-2">General Inquiries</p>
                        <p>Hello@8dots.Design</p>
                    </div>
                    <div>
                        <p className="mb-2">Contact</p>
                        <p>999-999-9999</p>
                    </div>
                </div>
            </div>
            <div className="mb-20 border-y border-dashed border-secondary pb-4 pt-2">
                <div className="animate-loop-scroll mb-2">
                    {
                        marquee.map(index => 
                            <span key={index}>
                                <span className="font-neue-power text-6xl text-secondary mr-6">knows</span>
                                <span className="font-neue-power text-6xl mr-6">talents</span>
                            </span>
                        )
                    }
                </div>
                <div className="animate-loop-scroll-right">
                    {
                        marquee.map(index => 
                            <span key={index}>
                                <span className="font-neue-power text-6xl text-secondary mr-6">knows</span>
                                <span className="font-neue-power text-6xl mr-6">talents</span>
                            </span>
                        )
                    }
                </div>
            </div>
            <p className="font-bai-jamjuree font-light text-sm text-center">© Design by 8dots 2024 | Develop by ariear</p>
        </nav>
    )
}

export default Footer
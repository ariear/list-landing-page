const Hero = () => {
    return (
        <div className="flex flex-col items-center pt-56 min-h-screen mb-20">
            <img src="/hero_pattern.svg" alt="" className="absolute -top-24 left-0 w-full -z-10" />
            <div>
                <p className="font-bai-jamjuree font-light text-[22px] w-[420px] mb-3 ml-auto translate-x-36">We Craft digitally enhanced solutions designed to win conversations.</p>
                <h1 className="font-neue-power font-bold text-8xl w-[790px] tracking-wide">We specialize in creating <span className="text-secondary">human centric designs.</span></h1>
            </div>
        </div>
    )
}

export default Hero
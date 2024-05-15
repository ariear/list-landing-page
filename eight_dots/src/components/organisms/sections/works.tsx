const Works = () => {
    return (
        <div className="mb-32">
            <h1 className="font-neue-power text-[115px] text-secondary text-center">Works</h1>
            <p className="font-bai-jamjuree font-light text-xl w-[650px] text-center mx-auto mb-24">I ask questions, Listen and advise my clients so that-together-we can create the best custom solutions possible. hree are a few examples of fabulous results.</p>
            <div className="flex justify-between flex-wrap w-[1020px] mx-auto">
                <img src="/works/mobile.png" className="mb-4 rounded-3xl hover:rounded-[80px] transition-all duration-500" alt="" />
                <img src="/works/travel.png" className="mb-4 rounded-3xl hover:rounded-[80px] transition-all duration-500" alt="" />
                <img src="/works/black.png"  className="rounded-3xl hover:rounded-[80px] transition-all duration-500" alt="" />
                <img src="/works/nixon.png"  className="rounded-3xl hover:rounded-[80px] transition-all duration-500" alt="" />
            </div>
        </div>
    )
}

export default Works
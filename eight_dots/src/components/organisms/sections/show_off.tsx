import gsap from "gsap"
import TitleLabel from "../../atoms/title_label"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

const ShowOff = () => {
    const stastics = useRef<null | HTMLDivElement>(null)

    useGSAP(() => {
        const ballsta = gsap.utils.toArray('.ballsta')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ballsta.forEach((section: any) =>
            gsap.fromTo(section, {
                translateX: 300,
                rotate: 90
            }, {
                rotate: 360,
                translateX: 0,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 900px',
                    end: 'top 200px',
                    toggleActions: 'restart none none none',
                    scrub: 1
                }
            })
        )
    }, { scope: stastics })

    return (
        <>
            <div className="mb-64">
                <TitleLabel label="Our Design Approach" />
                <h1 className="font-neue-power text-8xl text-secondary text-center mt-6 mb-10">Learn. Build. Measure.</h1>
                <p className="font-bai-jamjuree font-light text-xl w-[820px] text-center mx-auto">Every project is unique and demands tailored design strategies. We employ a flexible design approach that adapts successfully to a wide array of project types.</p>
            </div>
            <div ref={stastics} className="px-24 flex items-center justify-between mb-60">
                <div>
                    <h1 className="font-neue-power text-8xl text-secondary mb-8">Stastics</h1>
                    <p className="font-bai-jamjuree font-light text-xl w-[380px]">We Craft digitally enhanced solutions designed to win conversations.</p>
                </div>
                <div className="flex items-end relative">
                    <div className="ballsta absolute top-12 left-12 border border-secondary rounded-full w-[180px] h-[180px] flex flex-col justify-center items-center font-bai-jamjuree">
                        <p className="text-4xl mb-4">0.5+</p>
                        <p className="font-light">UI Projects</p>
                    </div>
                    <div className="ballsta absolute -top-11 left-64 border border-secondary rounded-full w-[200px] h-[200px] flex flex-col justify-center items-center font-bai-jamjuree">
                        <p className="text-5xl mb-4">20+</p>
                        <p className="text-lg font-light">Completed Projects</p>
                    </div>
                    <div className="ballsta border border-secondary rounded-full w-[180px] h-[180px] flex flex-col justify-center items-center font-bai-jamjuree">
                        <p className="text-4xl mb-4">12+</p>
                        <p className="font-light">Work Results</p>
                    </div>
                    <div className="ballsta border border-secondary rounded-full w-[250px] h-[250px] flex flex-col justify-center items-center font-bai-jamjuree">
                        <p className="text-5xl mb-4">8+</p>
                        <p className="text-lg font-light">Experience</p>
                    </div>
                    <div className="ballsta border border-secondary rounded-full w-[400px] h-[400px] flex flex-col justify-center items-center font-bai-jamjuree">
                        <p className="text-6xl mb-4">50+</p>
                        <p className="text-xl font-light">Our Clients</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowOff
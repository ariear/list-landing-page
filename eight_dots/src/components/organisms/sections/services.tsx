import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"
import { servicesData } from "../../../data/services"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Services = () => {
    const serviceRef = useRef<null | HTMLDivElement>(null)
    const services = servicesData

    useGSAP(() => {
        const lefts = gsap.utils.toArray('.left')

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lefts.forEach((section: any) =>
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 200px',
                    end: 'bottom 600px',
                    toggleActions: 'restart none none none',
                    pin: section,
                    pinSpacing: false
                }
            })
        )
        
        gsap.to('.card-1', {
            scrollTrigger: {
                start: 'top 200px',
                end: 'bottom -600px',
                toggleActions: 'restart none none none',
                pin: '.card-1',
                pinSpacing: false
            }
        })
        gsap.to('.card-2', {
            scrollTrigger: {
                start: 'top 200px',
                end: 'bottom -95px',
                toggleActions: 'restart none none none',
                pin: '.card-2',
                pinSpacing: false
            }
        })
        gsap.to('.card-3', {
            scrollTrigger: {
                start: 'top 200px',
                end: 'bottom 400px',
                toggleActions: 'restart none none none',
                pin: '.card-3',
                pinSpacing: false
            }
        })

        gsap.to('.card-4', {
            scrollTrigger: {
                start: 'top 200px',
                end: 'bottom -100px',
                toggleActions: 'restart none none none',
                pin: '.card-4',
                pinSpacing: false
            }
        })
        gsap.to('.card-5', {
            scrollTrigger: {
                start: 'top 200px',
                end: 'bottom 400px',
                toggleActions: 'restart none none none',
                pin: '.card-5',
                pinSpacing: false
            }
        })

        gsap.to('.card-6', {
            scrollTrigger: {
                start: 'top 200px',
                end: 'bottom -100px',
                toggleActions: 'restart none none none',
                pin: '.card-6',
                pinSpacing: false
            }
        })
        gsap.to('.card-7', {
            scrollTrigger: {
                start: 'top 200px',
                end: 'bottom 400px',
                toggleActions: 'restart none none none',
                pin: '.card-7',
                pinSpacing: false
            }
        })

    }, {scope: serviceRef})

    return (
        <div ref={serviceRef} className="px-24 mb-48">
            {
                services.map((service, index) => 
                    <div className="flex mb-28" key={index}>
                        <div className="left">
                            <img src={service.img} alt="" className="mb-6" />
                            <h1 className="font-neue-power text-5xl tracking-wide mb-7">{service.title}</h1>
                            <div className="flex flex-wrap pr-28">
                                {
                                    service.skills.map((skill, index) => 
                                        <p className="mr-3 mb-3 py-2 px-3 text-sm font-bai-jamjuree font-light rounded-full border border-secondary" key={index}>{skill}</p>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            {
                                service.cards.map(card => 
                                    <div key={card.id} className={`${card.bgColor} card-${card.id} text-primary w-[520px] p-8 pt-40 rounded-[60px] mb-40`}>
                                        <p className="font-bai-jamjuree font-medium text-3xl mb-3">{card.title}</p>
                                        <p className="font-bai-jamjuree">{card.desc}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Services
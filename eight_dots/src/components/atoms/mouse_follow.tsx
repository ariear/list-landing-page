import { useGSAP } from "@gsap/react"
import gsap from "gsap"

gsap.registerPlugin(useGSAP)

const MouseFollow = () => {
    useGSAP(() => {
        gsap.set(".mouse", { xPercent: -50, yPercent: -50 })
        gsap.set(".ball", { xPercent: -50, yPercent: -50 })
        window.addEventListener("mousemove", (e) => {
          gsap.to('.mouse', {
            duration: 0.1,
            x: e.clientX,
            y: e.clientY,
            ease: "power1.out",
            overwrite: "auto",
            stagger: 0.2,
          });
          gsap.to('.ball', {
            duration: 1,
            x: e.clientX,
            y: e.clientY,
            ease: "power1.out",
            overwrite: "auto",
            stagger: 1,
          });
        });
      })
      
    return (
        <>
            <div className="mouse border-2 bg-secondary w-3 h-3 fixed top-0 left-0 rounded-full -z-10"></div>
            <div className="ball border-2 border-secondary w-10 h-10 fixed top-0 left-0 rounded-full -z-10"></div>
        </>
    )
}

export default MouseFollow
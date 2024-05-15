import TitleLabel from "../../atoms/title_label"

function About() {
    return (
        <div className="mb-44">
            <TitleLabel label="Leadership Team" />
            <p className="font-neue-power text-8xl text-secondary text-center mt-6 mb-10">About Us</p>
            <p className="font-bai-jamjuree font-light text-xl w-[880px] text-center mx-auto mb-16">We possess a unique combination of a robust analytical and logical UX mindset, coupled with a highly imaginative and creative UI approach. The synergy of our thinking enables us to generate high-level design solutions.</p>
            <div className="flex justify-center">
                <img src="/teams/khan.png" alt="" />
                <img src="/teams/rose.png" className="mx-5" alt="" />
                <img src="/teams/john.png" alt="" />
            </div>
        </div>
    )
}

export default About
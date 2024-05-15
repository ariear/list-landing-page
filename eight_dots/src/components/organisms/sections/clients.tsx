import { clients } from "../../../data/clients"
import TitleLabel from "../../atoms/title_label"

const Clients = () => {
    const clientsData = clients

    return (
        <div className="mb-40">
            <TitleLabel label="We Made Design For" />
            <h1 className="font-neue-power text-8xl text-secondary text-center mt-6 mb-10">Our Clients</h1>
            <p className="font-bai-jamjuree font-light text-xl w-[880px] text-center mx-auto mb-16">We are working with a diverse range of clients, spanning from globally renowned entities with millions of users to innovative startups seeking for MVP design solutions.</p>
            <div className="grid grid-cols-3 gap-4 place-items-stretch px-60">
                {
                    clientsData.map(client => 
                        <div key={client.name} 
                            className={`h-[600px] bg-cover bg-center rounded-xl relative overflow-hidden group`} 
                            style={{backgroundImage: `url(${client.img})`}}>
                            <div className="bg-white bg-opacity-10 backdrop-blur-md w-full h-36 absolute bottom-0 font-bai-jamjuree text-black px-8 py-9 group-hover:h-full group-hover:pt-80 transition-all duration-500">
                                <h2 className="text-2xl font-medium mb-2">{client.name}</h2>
                                <h2 className="text-lg mb-10 group-hover:mb-4 transition-all">{client.job}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam itaque deserunt error odio aut voluptatibus accusantium, doloremque possimus exercitationem, quisquam provident quo iste esse soluta excepturi nobis vero impedit?</p>
                            </div>
                        </div>
                    )
                }            
            </div>
        </div>
    )
}

export default Clients
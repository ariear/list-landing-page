import { ReactLenis } from 'lenis/react'
import Nav from "./components/organisms/nav"
import Hero from "./components/organisms/sections/hero"
import Services from "./components/organisms/sections/services"
import ShowOff from "./components/organisms/sections/show_off"
import MouseFollow from './components/atoms/mouse_follow'
import Clients from './components/organisms/sections/clients'
import Works from './components/organisms/sections/works'
import About from './components/organisms/sections/about'
import Footer from './components/organisms/footer'

function App() {
  return (
    <ReactLenis root>
      <div className="text-white overflow-hidden">
        <Nav />
        <MouseFollow />
        <Hero />
        <Services />
        <ShowOff />
        <Clients />
        <Works />
        <About />
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
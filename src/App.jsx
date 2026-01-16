import Header from "./components/navigation/Header"
import Particles from './components/effects/Particles'
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"

function App() {

  return (
    <div className="w-full flex flex-col items-center">
    <div className="min-h-[100dvh] w-screen fixed inset-0 -z-10 [background:linear-gradient(to_right,#1f1f23,#18181b,#09090b)]">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Particles
          particleColors={["#01c1da"]}
          particleCount={300}
          particleSpread={15}
          speed={0.3}
          particleBaseSize={90}
          moveParticlesOnHover={false}
        />
      </div>
    </div>
      <Header />
      <Hero />
      <Projects />
    </div>
  )
}

export default App

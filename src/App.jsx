import {
  Navbar,
  Welcome,
  Footer,
  Services,
  ServicesAll,
  Feedback,
  Team,
} from './components'
const App = () => {
  return (
    <div className="min-h-screen bg-[#0D111C] justify-center items-center flex flex-col">
      <div className="w-full sticky inset-0  bg-[#0D111C]  z-40">
        <Navbar />
      </div>
      <div className="max-w-[1280px] ">
        <div name="Welcome">
          <Welcome />
        </div>
        <div name="Services">
          <Services />
        </div>

        <ServicesAll />

        <div name="Feedback">
          <Feedback />
        </div>
        <div name="Team">
          <Team />
        </div>
      </div>
      <Footer />
    </div>
  )
}



export default App

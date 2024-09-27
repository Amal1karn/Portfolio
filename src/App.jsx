import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Sociallinks from "./components/Sociallinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";




function App() {
  return(
    <div>
      <NavBar/>
      <Home />
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Sociallinks />

    </div>
  )
}

export default App;
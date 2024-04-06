import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Sociallinks from "./components/Sociallinks";


function App() {
  return(
    <div>
      <NavBar/>
      <Home />
      <About/>

      <Sociallinks />
    </div>
  )
}

export default App;
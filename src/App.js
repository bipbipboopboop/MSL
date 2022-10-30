import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Events } from "./components/Events";
// import { Skills } from "./components/Skills";
// import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Events />
      <About />
      {/* <Skills /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features/Features';
import About from "./Components/About/About"
import Stuff from './Components/Stuff/Stuff';
import Slide from './Components/Slide/Slide';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <div className="renk "> {/* For shadow  Brown */}
        <div className="hero-section ">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Features />
      <About />
      <Stuff />
      <Slide />
      <Gallery />
      <Footer/>
    </>
  );
}

export default App;

import Footer from './components/Footer/index.js';
import LandingPage from './components/LandingPage/index.js';
import Navbar from './components/Navbar';
// import NavBar from './components/NavBar-2';
import SectionB from './components/SectionB/index.js';
import FAQs from './components/FAQs/index.js';
import SectionC from './components/SectionC/index.js';
import './css/Main.scss';
import SectionD from './components/SectionD/index.js';
import AOS from 'aos';


// react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import About from './components/About/index.js';
import Teams from './components/Teams/index.js';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    AOS.refresh()
  }, []);

  return (
    <div className="App" >
      <Navbar/>
      {/* <NavBar/> */}
      <LandingPage/>
      {/* about */}
      <About/>
      {/* section b */}
      <SectionB/>
      
      {/* gift box section */}
      <SectionC/>
      {/* Avatar creation section */}
      <SectionD/>

      {/* teams */}
      <Teams/>
      {/* faq section */}
      <FAQs />
      <Footer/>
    </div>
  );
}

export default App; 

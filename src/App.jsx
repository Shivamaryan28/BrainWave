import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './components/Benifits';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
   <>
   <div className= "pt-[4.75] lg:pt-[5.25rem] overflow-hidden">
    <Header />
    <Hero />
    <Benefits />
    <Collaboration />
    <Services />
    <Pricing />
    <Roadmap />
    <Footer />
   </div>
     <ButtonGradient/>
   </>
  );
};

export default App

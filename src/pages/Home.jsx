import NavBar from '../components/NavBar.jsx';
import Contact from '../sections/Contact.jsx';
import ExperienceSection from '../sections/ExperienceSection.jsx';
import FeatureCards from '../sections/FeatureCards.jsx';
import Footer from '../sections/Footer.jsx';
import Hero from '../sections/Hero.jsx';
import Showcase from '../sections/Showcase.jsx';
import TechStack from '../sections/TechStack.jsx';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top AFTER render
    window.scrollTo(0, 0);

  }, []);

  return (
    <>
      <NavBar />
      < Hero />
      < Showcase />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}


export default Home
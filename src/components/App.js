//components and hooks
import { useContext } from 'react';
//context
import { ThemeContext } from '../context/ThemeContext';
//assets
import '../assets/styles/App.css';
//components
import { Header } from "./Header";
import { Logo } from './Logo';
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from "./Footer";
import { ScrollToTop } from './ScrollToTop';

export const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Header>
        <Logo />
        <Navbar />
      </Header>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};
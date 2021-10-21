//components and hooks
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
import { SocialMedia } from "./SocialMedia";
import { FormHOC } from "./FormHOC";
import { FormUI } from "./FormUI";
import { Footer } from "./Footer";
import { ScrollToTop } from './ScrollToTop';

export const App = () => {
  return (
    <div className="App">
      <Header>
        <Logo />
        <Navbar />
      </Header>
      <Hero />
      <About />
      <Projects />
      <Contact>
        <SocialMedia />
        <FormHOC Component={FormUI} />
      </Contact>
      <Footer />
      <ScrollToTop />
    </div>
  );
};
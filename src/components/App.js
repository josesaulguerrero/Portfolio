//components and hooks
//assets
//components
import { Header } from "./Header";
import { Logo } from './Logo';
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';

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
      <Contact />
    </div>
  );
};
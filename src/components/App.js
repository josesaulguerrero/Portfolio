//components and hooks
//assets
//components
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Logo } from './Logo';
import { Navbar } from "./Navbar";

export const App = () => {
  return (
    <div className="App">
      <Header>
        <Logo />
        <Navbar />
      </Header>
      <Hero></Hero>
    </div>
  );
};
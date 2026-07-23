import { Loader } from "./components/layout/Loader.jsx";
import { ScrollProgress } from "./components/layout/ScrollProgress.jsx";
import { Navbar } from "./components/layout/Navbar.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { About } from "./components/sections/About.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { Skills } from "./components/sections/Skills.jsx";
import { CodingProfiles } from "./components/sections/CodingProfiles.jsx";
import { Contact } from "./components/sections/Contact.jsx";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

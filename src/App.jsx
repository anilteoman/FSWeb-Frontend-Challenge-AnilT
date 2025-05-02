import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { LanguageContextProvider } from "./contexts/LanguageContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </LanguageContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;

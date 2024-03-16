import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme } from "./utils/themes.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Education from "./pages/Education/Education.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import { Body, Wrapper } from "./AppStyles.js";

const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Body>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route
                path="/projects"
                element={
                  <Projects openModal={openModal} setOpenModal={setOpenModal} />
                }
              />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Wrapper></Wrapper>
            <Footer />
          </Body>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
};

export default App;

import { useState } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home.jsx";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Services from "./pages/Services/Services.jsx";

import Header from "./components/Header/Header.jsx";

// Main location provider - AnimatePresence
function LocationProvider({ children }) {
  return <AnimatePresence initial={false}>{children}</AnimatePresence>;
}

// Get all routes to add
function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <Router>
        <LocationProvider>
          <header>
            <Header />
          </header>
          <main className=" ">
            <RoutesWithAnimation />
          </main>
        </LocationProvider>
      </Router>
    </>
  );
}

export default App;

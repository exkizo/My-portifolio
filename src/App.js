import React from "react";
import About from "./components/About"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Timeline from "./components/Timeline";
import Education from "./components/Education";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  );
}

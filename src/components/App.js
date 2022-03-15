
import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Services from "./Services";

export default function App(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Projects />
            <Contact />
            <AboutMe />
            <Footer/>
        </div>
        
    )
}
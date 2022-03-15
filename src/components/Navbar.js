import React from "react";

export default function Navbar(){   
    return (
        <header>
        <a href="#logo" className="logo">Hercules</a>
        <nav className="navigation">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
       </header>
    )
}
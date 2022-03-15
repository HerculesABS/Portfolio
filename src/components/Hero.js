import React from "react";

export default function Hero() {
    return (
        <section className="main"> 
        <div>
            <h2>Hello, I'm Abdessamad<br/><span>Front end developer</span></h2>
            <h3>I'm very passionate about programming  </h3>
            <a href ="#about-me" className="main-btn">About me</a>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/abdessamad-el-harbouli-44349822b/"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/HerculesABS?tab=repositories"><i className="fab fa-github"></i></a>
            </div>
        </div>
    </section>
    )
}
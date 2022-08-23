
import React from "react";

export default function Projects(){
    return (
        
        <section className="projects" id="projects">
        <h2 className="title">Projects</h2>
        <div className="content">

           
            <div className="project-card">
                <div className="project-image">
                    <img src={require(`../images/ReactFactsBackground.png`)} alt="Project background img"/>
                </div>
                <div className="project-info">
                    <p className="project-category">Using the state's concept to switch from darkMode to lightMode</p>
                    <strong className="project-title">
                        <span>Static Website</span>
                        <a href="https://herculesabs.github.io/ReactFunFacts/" className="more-details">More details</a>
                    </strong>
                </div>
            </div>

      
            <div className="project-card">
                <div className="project-image">
                    <img src={require(`../images/TenziesGameBg.png`)} alt="Project background img"/>
                </div>
                <div className="project-info">
                    <p className="project-category">A game , using the state's concept also and the Effect Hook</p>
                    <strong className="project-title">
                        <span>Tenzies Game</span>
                        <a href="https://herculesabs.github.io/Tenzies/" className="more-details">More details</a>
                    </strong>
                </div>
            </div>
            <div className="project-card">
                <div className="project-image">
                    <img src={require(`../images/Restaurant-website.png`)} alt="Project background img"/>
                </div>
                <div className="project-info">
                    <p className="project-category">A React Restaurant Website , using Modern UI - DESIGN </p>
                    <strong className="project-title">
                        <span>Restaurant Website </span>
                        <a href="https://herculesabs.github.io/sauto-berria/" className="more-details">More details</a>
                    </strong>
                </div>
            </div>
        </div>
    </section>

    

    )
}
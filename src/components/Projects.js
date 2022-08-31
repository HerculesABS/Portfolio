
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
                    <img src={require(`../images/Restaurant-website.jpg`)} alt="Project background img"/>
                </div>
                <div className="project-info">
                    <p className="project-category">A React Restaurant Website , using Modern UI - DESIGN </p>
                    <strong className="project-title">
                        <span>Restaurant Website </span>
                        <a href="https://herculesabs.github.io/sauto-berria/" className="more-details">More details</a>
                    </strong>
                </div>
            </div>
            <div className="project-card">
                <div className="project-image">
                    <img src={require(`../images/js-CRUDS.jpg`)} alt="Project background img"/>
                </div>
                <div className="project-info">
                    <p className="project-category">Product managment system using all the CRUDS opearations in javascript</p>
                    <strong className="project-title">
                        <span>CRUDS javascript </span>
                        <a href="https://herculesabs.github.io/CRUD-JS/" className="more-details">More details</a>
                    </strong>
                </div>
            </div>
            <div className="project-card">
                <div className="project-image">
                    <img src={require(`../images/yt-clone.jpg`)} alt="Project background img"/>
                </div>
                <div className="project-info">
                    <p className="project-category">Youtube clone app, build using REACT , RapidAPI and styled by MaterialUI v5</p>
                    <strong className="project-title">
                        <span>Modern Youtube Clone app </span>
                        <a href="https://silver-sunburst-373dd6.netlify.app/" className="more-details">More details</a>
                    </strong>
                </div>
            </div>
           
        </div>
    </section>

    

    )
}
import React from "react";

export default function Services(){
    return(
        <section className="cards" id="services">
        <h2 className="title">Services</h2>
        <div className="content">
            <div className="card">
                <div className="icon">
                    <i className="fas fa-edit"></i>
                </div>
                <div className="info">
                    <h3>Content Creation</h3>
                    <p>To reinforce my knowledge I share it.</p>
                </div>
            </div>
            <div className="card">
                <div className="icon">
                    <i className="fas fa-code"></i>
                </div>
                <div className="info">
                    <h3>Front end development</h3>
                    <p>I enjoy building user interfaces by providing better user experience and helping business owners.</p>
                </div>
            </div>
        </div>
        
    
    </section>
    )
}
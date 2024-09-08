import React from 'react';
import "./About.css";

export default function About(){
    return(
        <div className="About-container">
        <div className="About-header">
            <h1>About Jennifer</h1>
            <h3>Front-end Developer</h3>
            <h4>Crafter, Problem Solver and Detailed Orientated</h4>
        </div>

        <div className="About-main">
            <h3>Bio</h3>
            <p>
            I am passionate about building products that are practical and user-friendly to optimise customer journey. 
            Ultimately my goal is to build projects to help solve real life problems. 
            I enjoy the craft of coding and the variety of products you can create, to help optimise experience and address everyday pain points.
            </p>
            <p>
            I am a self-taught front-end developer learning to code using freecodecamp, sheCodes and from my mentor, my Husband - Alex who has been the biggest motivation support.
            I started this journey in August 2023, and now 9 months in (as I'm writing this in my local coffee shop), I am creating my own portfolio website, and setting up new projects to help solve real issues.
            I have thoroughly enjoyed the learning experience, the variety in resource available in the public domain and private courses, and how open and encouraging the community is in helping one another via forums and open sources.
            </p>
            <p>Outside of coding, I am a natural crafter in other disciplines; creating leather accessories and other related art works, as well as my full time occupation as a senior marketer for a technology company.
            Join me in this journey in sharing curiousity and encouraging a learn in public environment as I explore a different career path in coding.     
            </p>
        </div>

        <div className="About-projects-container">
                <div className="About-project-items">
                    <div className="items">
                   <h3>I build and design stuff</h3>
            <p>Open-sourced projects, apps and experiments.</p> 
                </div>
                <div className="items">
                <h3>I write, sometimes</h3>
            <p>Summaries of key learnings and experience, and life. </p>
            </div>
                </div>
        </div>

        <div className="About-connect-container">
            <h3>Connect</h3>
            <p>Connect and follow me on this journey.</p>
            <div className="About-connect-items">
                <p>Linkedin</p>
                <p>GitHub</p>    
                <p>X</p>    
            </div>
         <div className="About-connect-secondary">
            <div className="About-connect-secondary-items">
              <button className="button-contacts">Contact</button>  
            </div>
         </div>
            
        </div>
        </div>
    )
}
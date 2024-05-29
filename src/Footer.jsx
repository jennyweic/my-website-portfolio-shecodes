import React from 'react';
import App from './App';
import "./Footer.css";

export default function Footer (){
    return(
        <div className="Footer-container">
            <small>This project was coded by  
                <a href="https://www.linkedin.com/in/chanwjennifer" target="_blank"> Jennifer </a> and is on 
                <a href="https://github.com/jennyweic"> Github</a>  and hosted by Netlify.
            </small>
        </div>
    )
}
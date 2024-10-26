import React from 'react';
import App from './App';
import "./Connect.css";

export default function Connect (){
    return(
        <div className="Connect-container">
<h3>Connect</h3>
<p>Connect and follow me on this journey.</p>
<div className="Connect-items">
    <button className="button-contacts"> 
        <a href="https://www.linkedin.com/in/chanwjennifer/">LinkedIn</a>
    </button>
    <button className="button-contacts">
        <a href="https://github.com/jennyweic">GitHub</a>
        </button>    
    <button className="button-contacts">
    <a href="https://x.com/weicchan">X</button>   
    <button className="button-contacts">
        <a href="" target="_blank">Read My CV</a>
    </button>  
</div>    
</div>)
}
import React from 'react';
import App from './App';
import "./Connect.css";

export default function Connect (){
    return(
        <div className="Connect-container">
<h3>Connect</h3>
<p>Connect and follow me on this journey.</p>
<div className="Connect-items">
    <button className="button-contacts">Linkedin</button>
    <button className="button-contacts">GitHub</button>    
    <button className="button-contacts">X</button>   
    <button className="button-contacts">Contact</button>  
</div>    
</div>)
}
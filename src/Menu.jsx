import React from 'react';
import App from './App';
import "./Menu.css";

export default function Menu (){
    return(
        <div className="Menu-container">
            <ul>
                <li className='Menu-items'>
                    <a class="active" href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#connect">Connect</a>
                </li>
            </ul>
        </div>
    )
}
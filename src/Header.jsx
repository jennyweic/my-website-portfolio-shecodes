import React from 'react';
import App from './App';
import "./Header.css";

export default function Header (){
    return (
        <div className='homepage-header-container'>
            <h1>Hi, I'm Jennifer</h1>
            <h3>Front-end Developer from London</h3>
            <button>About</button>
            <button>Projects</button>
        </div>
    )
}
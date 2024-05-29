import React from 'react';
import App from './App';
import './Projects.css';

export default function Projects (){
    return(
<div className="Projects-container">
    <h1>Projects</h1>
    <div className="Project-items">
      <div className="item">
        <a href="https://wwww.tubular-biscotti-9cd7dd.netlify.app">Jwei Recipes</a>
        <p>New recipes collection platform. Stay tuned for more updates.</p>
      </div>
      <div className="item">
        <a href="https://www.jennys-dictionary.netlify.app">Dictionary</a>
        <p>Search for a word and see what information it returns for you.</p>
      </div>
      <div className="item">
        <a href="https://master--new-weather-app-react.netlify.app/">Weather</a>
        <p>Weather app helps to find your daily and six day forecast weather information.</p>
        </div>
      <div className="item">
        <a href="https://dashing-concha-c74694.netlify.app">Fitness</a>
        <p>A hobby blog site focuses on fitness improves wellness and love the toggle theme feature.</p>
        </div>
      <div className="item">
        <a href="https://www.jennifers-world-clock.netlify.app">World Clock</a>
        <p>Select a (local) city for the latest date and time to find your locations real time clock information.</p>
        </div>
        </div>
    </div>
    )
}
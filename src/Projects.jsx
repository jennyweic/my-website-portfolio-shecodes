import React from 'react';
import App from './App';
import './Projects.css';
import Video from '../src/assets/Jwei-Recipes.mov';
import Video2 from '../src/assets/Fitness.mov';
import Video3 from '../src/assets/Weather.mov';
import Video4 from '../src/assets/World-Clock.mov';

export default function Projects (){
    return(
<div className="Projects-container">
    <h1>Projects</h1>
    <div className="Project-items">
    <   div className="item">
        <a href="https://www.jennys-dictionary.netlify.app"><h2>Dictionary</h2></a>
        <p><img src="src/assets/Dictionary-app.png" alt="Dictionary-app" width="300"/></p>
        <p>Search for a word and see what information it returns for you.</p>
      </div>
      
    </div>

    <div className="Project-secondary-items">
     <div className="item">
        <a href="https://wwww.tubular-biscotti-9cd7dd.netlify.app"><h2>Jwei Recipes</h2></a>
       <div><video controls>
            <source src={Video} type="video/mov"alt="Jwei-recipes-app"/>
            </video></div> 
        <p>New recipes collection platform. Stay tuned for more updates.</p>
      </div>
      <div className="item">
        <a href="https://dashing-concha-c74694.netlify.app"><h2>Fitness</h2></a>
<div>
    <video controls>
        <source src={Video2} type="video/mov" alt="Fitness-website"/>
    </video>
</div>
        <p>A hobby blog site focuses on fitness improves wellness and love the toggle theme feature.</p>
        </div>
        <div className="item">
        <a href="https://master--new-weather-app-react.netlify.app/"><h2>Weather</h2></a>

        <div>
    <video controls>
        <source src={Video3} type="video/mov" alt="Weather-app"/>
    </video>
</div>
        <p>Weather app helps to find your daily and six day forecast weather information.</p>
        </div>
      
      <div className="item">
        <a href="https://www.jennifers-world-clock.netlify.app"><h2>World Clock</h2></a>
        <div>
    <video controls>
        <source src={Video4} type="video/mov" alt="World-clock"/>
    </video>
</div>
        <p>Select a (local) city for the latest date and time to find your locations real time clock information.</p>
        </div>
    </div>
    
</div>
    )
}
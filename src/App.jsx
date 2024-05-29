import React from "react";
import "./App.css";
import Footer from "./Footer";
import Menu from "./Menu";
import Header from './Header';
import About from './About';
import Projects from "./Projects";
import Connect from "./Connect";

function App() {
  return (
    <>
      <div className="App"> 
      <Menu />
      <main>
      <Header />
      <About />
      <Projects />
      <Connect />
      </main>
      <Footer />
      </div>
        
    </>
  );
}

export default App;

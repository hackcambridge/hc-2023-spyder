import logo from "./shared/img/logo.svg";
import './App.scss';
import Header from './header/containers/Header';
import Home from './shared/containers/Home';
import React from "react";

function App() {
  const navElements = [
    {name: "Lite Introductory Hackathon", href: "#about-intro"},
    {name: "Main Hackathon", href: "#main-event"},
    // {name: "FAQ", href: "#faq"},
    // {name: "Our Sponsors", href: "#sponsor-showcase"}
    // {name: "Meet the team", href: "#team"}
  ];
  return (
    <div className="App">
      <Header logoPath={logo} navElements={navElements}/>
      {/* <Router> */}
      <Home logoPath={logo} path='/'/>
      {/* </Router> */}
    </div>
  );
}

export default App;

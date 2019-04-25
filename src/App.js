import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import LinkBar from "./components/LinkBar"

function App() {
  return (
    <div className="App">
    <LinkBar />
  <NavBar />
  <Home />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";

import Main from "./components/main";
import LandingPage from "./components/landing_page";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header></Header>

        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

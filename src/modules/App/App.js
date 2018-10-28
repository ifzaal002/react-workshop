import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Lessons from '../Lessons/Lessons';

import './App.css';
import Provider from "react-redux/es/components/Provider";
import Store from "./components/Footer/Store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Lessons />
        <Provider store={Store}>
          <Footer/>
        </Provider>


      </div>
    );
  }
}

export default App;

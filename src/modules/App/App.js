import React, { Component } from 'react';
import routes from '../../routes';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from "./components/Sidebar/Sidebar";

import './App.css';
import '../Lessons/Lessons.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="lessons">
          <Sidebar/>
          <div className="lesson-body">
            {routes}
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { render, ReactDOM } from 'react-dom';
import Clock from './Clock';
import './style.css';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>
          React JS app
        </h1>
        <Clock/>
      </div>
    );
  }
}



render(
  <App />,
  document.getElementById('root')
);
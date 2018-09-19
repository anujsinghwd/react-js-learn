import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales';

class App extends Component {
  render() {
    var courses = [
      {name: 'Complete IOS10 Dev Course', price: 199},
      {name: 'Complete Android Dev Course', price: 599},
      {name: 'Complete Frontend Dev Course', price: 399},
      {name: 'Complete PHP Dev Course', price: 299}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page</h1>
        </header>
        <CourseSales items={courses}/>
      </div>
    );
  }
}

export default App;

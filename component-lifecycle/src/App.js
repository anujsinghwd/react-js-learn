import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Component LifeCycle</h1>
        </header>
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      r: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    //console.log('Random Number Called');
    this.setState({ r: Math.floor(Math.random()*10) })
  }

  render(){
    return(
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random number</button>
        <Numbers myNumber={this.state.r}/>
      </div>
    );
  }
}

class Numbers extends Component {
  componentWillMount(){
    console.log('Component About to be mounted: Component Will Mount Called');
  }

  componentDidMount(){
    console.log('After Will mount: Component Did Mount Called');
  }

  componentWillReceiveProps(newProps){
    console.log('After setting state : componentWillReceiveProps Called');
  }

  shouldComponentUpdate(newProps, nextState){
    console.log('shouldComponentUpdate called');
    return true;
  }

  componentWillUpdate(newProps, nextState){
    console.log('componentWillUpdate Called');
  }

  componentDidUpdate(newProps, nextState){
    console.log('componentDidUpdate Called');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount Called');
  }

  render(){
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;

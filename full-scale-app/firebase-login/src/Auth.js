import React, { Component } from 'react';
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyACQmTRLmrxRc4BFdgC0Zv5Cq3sjlfWfFE",
    authDomain: "u-survey-31253.firebaseapp.com",
    databaseURL: "https://u-survey-31253.firebaseio.com",
    projectId: "u-survey-31253",
    storageBucket: "u-survey-31253.appspot.com",
    messagingSenderId: "991648251047"
  };
firebase.initializeApp(config);

class Auth extends Component {

  login(event){
      const email = this.refs.email.value;
      const password = this.refs.pass.value;

      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email, password);

      promise
        .then(user => {
            var lout = document.getElementById('logout');
            lout.classList.remove('hide');
            var err = "Welcome "+user.user.email;
            this.setState({err: err});
        });

      promise.catch(e => {
        var err = e.message;
        this.setState({err: err});
      });
  }

  signup(event){
    const email = this.refs.email.value;
    const password = this.refs.pass.value;

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
      .then(user => {
        var err = "Welcome "+user.user.email;
        firebase.database().ref('users/'+user.user.uid).set({
          email: user.user.email
        });
        this.setState({err: err});
      });

    promise.catch(e => {
      var err = e.message;
      this.setState({err: err});
    });
  }

  logout(){
    firebase.auth().signOut();
    var lout = document.getElementById('logout');
    lout.classList.add('hide');
    var err = "Thanks For Using Our Application";
    this.setState({err: err});
  }

  google(){
    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);

    promise
      .then(result => {
          var user = result.user;
          console.log(result);

          firebase.database().ref('users/'+user.uid).set({
            email: user.email,
            name: user.displayName
          });
      });

    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({err: err});
    });
  }

  googleRedirect(){
    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithRedirect(provider);

    promise
      .then(result => {
          if (result.credential) {
            var token = result.credential.accessToken;
            console.log(token);
          }
      });

    promise.catch(e => {
      console.log(e);
    });
  }

  constructor(props){
    super(props);

    this.state = {
      err: ''
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);
    this.googleRedirect = this.googleRedirect.bind(this);
  }
  render(){
    return(
      <div>
        <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
        <input id="pass" ref="pass" type="password" placeholder="Enter your password" /><br />
        <p>{this.state.err}</p>

        <button onClick={this.login}>Log In</button>
        <button onClick={this.signup}>Sign Up</button>
        <button id="logout" className="hide" onClick={this.logout}>Log out</button><br />
        <button id="google" className="google" onClick={this.google}>Sign In With Google</button>
      </div>
    );
  }
}

export default Auth;

import React, { Component } from 'react';
// import logo from './logo.svg';
import Navigation from './components/Navigation.js'
import Main from './containers/main/Main.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;

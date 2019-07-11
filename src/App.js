import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/user/navbar/Navbar';
import UserContent from './components/user/user-content/UserContent';

import PropTypes from 'prop-types';
import Footer from './components/user/fotter/Fotter';
// import routes from '../Routes/routes';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Navbar title="Navbar"></Navbar>
        <UserContent body={children}></UserContent>
        <Footer title="Footer"></Footer>
      </div>
    );
  }
}

export default App;

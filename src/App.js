import React, { Component } from 'react';
import './App.css';
import Navbar from './components/user/navbar/Navbar';
import UserContent from './components/user/user-content/UserContent';
import Sidebar from './components/admin/sidebar/Sidebar';
import AdminContent from './components/admin/admin-content/AdminContent';
import PropTypes from 'prop-types';
import Footer from './components/user/fotter/Fotter';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };
  render() {
    const { children } = this.props;
    const currentRoute = window.location.pathname;
    if (!currentRoute.includes('/admin')) {
      return (
        <div className="App">
          <Navbar title="Navbar"></Navbar>
          <UserContent body={children}></UserContent>
          <Footer title="Footer"></Footer>
        </div>
      );
    } else {
      return (
        <div>
          <div className="d-flex" id="wrapper">
            <Sidebar></Sidebar>
            <AdminContent body={children}></AdminContent>
          </div>
        </div>
      )
    }
  }
}

export default App;

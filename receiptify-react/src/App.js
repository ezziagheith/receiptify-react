import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';

import './App.css';

// import Upload from './upload/Upload'

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    axios.delete(`${process.env.REACT_APP_API_URL_LOCAL}/auth/logout`, { withCredentials: true })
      .then(res => {
        localStorage.removeItem('uid');
        this.setState({ currentUser: null });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render () {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout}/>
        <Routes currentUser={this.state.setCurrentUser} setCurrentUser={this.setCurrentUser} />
        {/* <div className="App">
          <div className="Card">
            <Upload />
          </div>
        </div> */}
      </>
    );
  };
};

export default withRouter(App);

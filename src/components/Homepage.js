import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Homepage extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/admin/Homepage">Home</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="/admin/MyTests">My tests</a></li>
              <li><a href="/admin/CreateTest">Create new test</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Homepage;

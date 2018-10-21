import React, { Component } from "react";
import '../css/Navbar.css'

class Navbar extends Component {
  render() {
    return <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand is-center">
          <a href="/" className="navbar-item has-text-white">
            <i className="fab fa-github navbar_logo" width="112" height="28" />
            <span className="navbar_title">Github Finder</span>
          </a>
        </div>
      </nav>;
  }
}

export default Navbar;

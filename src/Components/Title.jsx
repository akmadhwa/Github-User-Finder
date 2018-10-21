import React from "react";
import '../css/Title.css'

class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <h1 className="title is-1">Github User Finder</h1>
        <p className="subtitle">You can search your friends github profile</p>
      </div>
    );
  }
}

export default Title;

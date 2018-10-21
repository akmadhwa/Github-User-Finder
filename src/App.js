import React, { Component } from "react";
// Component
import Title from "./Components/Title";
import Navbar from "./Container/Navbar";
import Form from "./Container/Form";
import User from "./Components/UserDetails";
// Css
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    fullName: "",
    location: "",
    bio: "",
    avatar_URL: "",
    public_repos: "",
    public_gists: "",
    followers: "",
    following: ""
  };

  getUser = async e => {
    e.preventDefault();
    let name = e.target.elements.username.value;

    const API_CALL = await fetch(`https://api.github.com/users/${name}`);
    const Data = await API_CALL.json();

    if (API_CALL.status === 200) {
      this.setState({
        username: Data.login,
        fullName: Data.name,
        location: Data.location,
        bio: Data.bio,
        avatar_URL: Data.avatar_url,
        public_repos: Data.public_repos,
        public_gists: Data.public_gists,
        followers: Data.followers,
        following: Data.following
      });
    } else {
      this.setState({
        username: null,
        fullName: null,
        location: null,
        bio: null,
        avatar_URL: null,
        public_repos: null,
        public_gists: null,
        followers: null,
        following: null
      });
    }
  };

  render() {
    const {
      username,
      fullName,
      location,
      bio,
      avatar_URL,
      public_repos,
      public_gists,
      followers,
      following
    } = this.state;
    const values = {
      username,
      fullName,
      location,
      bio,
      avatar_URL,
      public_repos,
      public_gists,
      followers,
      following
    };
    return (
      <div>
        <Navbar />
        <div className="container is-fluid">
          <Title />
          <Form getUser={this.getUser} />
          <User values={values} />
        </div>
      </div>
    );
  }
}

export default App;

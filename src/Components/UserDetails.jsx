import React, { Component } from "react";
import GithubStats from "../Components/GithubStats";
import "../css/UserDetails.css";

class User extends Component {
  render() {
    const {
      values: {
        username,
        fullName,
        location,
        bio,
        avatar_URL,
        public_repos,
        public_gists,
        followers,
        following
      }
    } = this.props;
    return <div className="user">
        <div className="columns">
          <div className="column is-3">
            <figure class="image is-256x256">
              <img src={avatar_URL} alt="" />
            </figure>
          </div>
          <div className="column">
            <h1 className="is-size-4">{fullName}</h1>
            <p className="is-size-5 has-text-grey-light">
              {username && <i>@{username}</i>}
            </p>
            <p>{location}</p>
            <p>{bio}</p>
            <div className="user__githubDetails">
              <GithubStats public_gists={public_gists} public_repos={public_repos} followers={followers} following={following} />
            </div>
          </div>
        </div>
      </div>;
  }
}

export default User;

import React from "react";

const GithubStats = props => {
  return (
    <nav class="level">
      {props.followers && (
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">{props.followers}</p>
          </div>
        </div>
      )}
      {props.following && (
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">{props.following}</p>
          </div>
        </div>
      )}
      {props.public_repos && (
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Public Repos</p>
            <p class="title">{props.public_repos}</p>
          </div>
        </div>
      )}
      {props.public_gists && (
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Public Gists</p>
            <p class="title">{props.public_gists}</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default GithubStats;

import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div class="jumbotron">
        <h1 class="display-4 m-5">About this app!</h1>
        <p class="lead">
          It's just a simple react app using react.js, react navigation and
          Bootstrap. It displays all of the items from the daily fortnite shop,
          using the fortnite api, just a random one that fell into my hands :P.
        </p>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Mymod extends Component {
  render() {
    return (
      <div>
	  <div>this message came from '{this.props.title}'</div>
      </div>
    );
  }
}
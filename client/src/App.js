import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";
// import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="ui raised segment"> */}
        <div className="ui segment violet inverted">
          <Header color={"violet"} inverted as="h1">
            World At War
          </Header>
        </div>
        {/* </div> */}
        {/* <Segment> */}
        <HomePage />
        {/* </Segment> */}
      </div>
    );
  }
}

export default App;

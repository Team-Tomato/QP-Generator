import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from '../Components/navbar'
import routes from "../route.js";

class App extends Component {

  getRoutes = routes => {
    return routes.map((prop, key) => {
      return (
        <Route
          exact path={prop.path}
          render={props => (
            <prop.component
              {...props}
            />
          )}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Navbar />
          <Switch>{this.getRoutes(routes)}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

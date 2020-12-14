import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../Components/Navbar";
import CustomNavbar from "./../Components/CustomNavbar";
import routes from "../route.js";

class App extends Component {
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          exact
          path={prop.path}
          render={(props) => <prop.component {...props} />}
          key={key}
        />
      );
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div id="main-panel" className="main-panel" ref="mainPanel">
          {/* <Navbar /> */}
          <CustomNavbar />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

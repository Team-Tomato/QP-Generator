import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "../../containers/Menubar/CustomNavbar";
import QuestionPaper from "./QP";
import BloomLogic from "./BloomLogic";
import Help from "./Help";

const Main = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/questionPaper" component={QuestionPaper} />
      <Route path="/bloomLogic" component={BloomLogic} />
      <Route path="/help" component={Help} />
      <Redirect to="/landingPage" />
    </Switch>
  </>
);

export default Main;

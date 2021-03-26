import React, { useState, Fragment } from "react";

import PythonProblemRepository from './components/python-problem-repository';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
function App() {
  return(
    <Route exact path="/python-problem-repository">
          <div>
          <PythonProblemRepository/>
          </div>
      </Route>
  )
}

export default App;
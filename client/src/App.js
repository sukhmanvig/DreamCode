import React, { useState, Fragment } from "react";

import PythonproblemRepository from './components/python-problem-repository';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
function App() {
  return(
    <Route exact path="/python-problem-repository">
          <div>
          <PythonproblemRepository/>
          </div>
      </Route>
  )
}

export default App;
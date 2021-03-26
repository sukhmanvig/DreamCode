import React, { useState, Fragment } from "react";

import PythonLearningResources from './components/python-learning-resources';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
function App() {
  return(
    <Route exact path="/python-learning-resources">
          <div>
          <PythonLearningResources/>
          </div>
      </Route>
  )
}

export default App;

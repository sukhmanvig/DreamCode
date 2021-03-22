import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = localStorage.getItem("isLogin");
  return (
    //Show the component only when the user is logged in
    //otherwise redirect the user to the /login page
    <Route
      {...rest}
      component={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

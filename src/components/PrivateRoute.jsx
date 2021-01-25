/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";

export default function PrivateRoute(props) {
  const { token } = useContext(TokenContext);
  const { component: Component, ...rest } = props;

  if (token) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  // redirect if there is no user
  return <Redirect to="/login" />;
}

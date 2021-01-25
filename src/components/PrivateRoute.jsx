/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";

const PrivateRoute = (props) => {
  const { token } = useContext(TokenContext);
  const { component: Component, ...rest } = props;

  if (token) {
    return (
      <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
    );
  }
  // redirect if there is no user
  return <Redirect to="/login" />;
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PrivateRoute;

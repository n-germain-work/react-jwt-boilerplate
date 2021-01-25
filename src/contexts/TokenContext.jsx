import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TokenContext = createContext(null);

const TokenContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const { children } = props;

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TokenContextProvider;

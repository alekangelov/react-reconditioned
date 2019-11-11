import React, { createContext } from "react";
import PropTypes from "prop-types";
export const ConditionalContext = createContext(Boolean);

function Conditional({ condition = Boolean, children }) {
  return (
    <ConditionalContext.Provider value={condition}>
      {children}
    </ConditionalContext.Provider>
  );
}

export default Conditional;

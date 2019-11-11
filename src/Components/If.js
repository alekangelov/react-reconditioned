import React, { useContext } from "react";
import { ConditionalContext } from "./Conditional";

export function If({ children }) {
  const context = useContext(ConditionalContext);
  if (context) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return null;
}

export function Else({ children }) {
  const context = useContext(ConditionalContext);
  if (!context) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return null;
}

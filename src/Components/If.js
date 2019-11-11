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

export function Condition({
  condition = Boolean,
  children,
  match = true,
  dontMatch = false
}) {
  if (match) {
    if (condition) {
      return <React.Fragment>{children}</React.Fragment>;
    }
  }
  if (dontMatch) {
    if (!condition) {
      return <React.Fragment>{children}</React.Fragment>;
    }
  }
  return null;
}

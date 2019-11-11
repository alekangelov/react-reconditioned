import React, { useContext } from "react";
import { ConditionalContext } from "./Conditional";

export function Switch({ children }) {
  const context = useContext(ConditionalContext);
  let matchingCase = null;
  let defaultCase = null;
  children.forEach(child => {
    if (!React.isValidElement(child)) {
      return;
    }
    if (child.type.name === "Default") {
      defaultCase = child;
      return;
    }
    if (child.props.value === context) {
      matchingCase = child;
      return;
    }
  });
  return (
    <React.Fragment>
      {JSON.stringify(context)}
      <br></br>
      {matchingCase || defaultCase || null}
    </React.Fragment>
  );
}

export function Case({ match = "", children }) {
  return children;
}

export function Default({ children }) {
  return children;
}

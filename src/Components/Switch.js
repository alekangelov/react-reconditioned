import React, { useContext } from "react";
import { ConditionalContext } from "./Conditional";
import { isArray } from "util";

export function Switch({ children }) {
  const context = useContext(ConditionalContext);
  let matchingCase = null;
  let defaultCase = null;

  const arrayChildren = isArray(children) ? children : [children];
  arrayChildren.forEach(child => {
    if (!React.isValidElement(child)) {
      return;
    }
    if (child.type == Default) {
      defaultCase = child;
      return;
    }
    if (child.props.value === context) {
      matchingCase = child;
      return;
    }
  });
  console.log(arrayChildren);
  console.log(matchingCase, defaultCase);

  return <React.Fragment>{matchingCase || defaultCase || null}</React.Fragment>;
}

export function Case({ match = "", children }) {
  return children;
}

export function Default({ children, defaultCase = true }) {
  console.log(this, "ova");
  return children;
}

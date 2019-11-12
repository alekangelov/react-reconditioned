import React, { Component, useState } from "react";

import {
  Conditional,
  If,
  Else,
  Switch,
  Case,
  Default
} from "react-reconditioned";
import Syntax from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

function SimpleIf() {
  const [option, setoption] = useState(true);

  return (
    <React.Fragment>
      <Conditional condition={option}>
        <If>
          <p>IT'S TRUE 🗿🗿🗿</p>
        </If>
        <Else>
          <p>Gosh darn it! 😳🤭</p>
        </Else>
      </Conditional>
      <button onClick={() => setoption(!option)}>
        Change to {!option ? "true" : "false"}
      </button>
    </React.Fragment>
  );
}
function SimpleSwitch() {
  const [option, setoption] = useState("initial value");

  return (
    <React.Fragment>
      <Conditional condition={option}>
        <Switch>
          <Case value="initial value">
            <p>Yasss this should work?? 😰</p>
          </Case>
          <Case value="second value">
            <p>YEAH BRO! It doessss! 🤝</p>
          </Case>
          <Default>
            <p>Idk what to do so I'm defaulted asf bro 😳</p>
          </Default>
        </Switch>
      </Conditional>
      <button onClick={() => setoption("initial value")}>
        Change to initial value
      </button>
      <br></br>
      <button onClick={() => setoption("second value")}>
        Change to second value
      </button>
      <br></br>
      <button onClick={() => setoption(null)}>Change to null value</button>
    </React.Fragment>
  );
}

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <img src={require("./style/conditional.png")} alt="conditional logo" />
        <h1>Declarative ternary operations for the masses!</h1>
        <p>
          It's pretty simple, really. Import the components and declare your
          logic!
        </p>
        <Syntax language="react" style={atomOneLight}>
          {`import { Conditional, If, Else } from "conditional-react";`}
        </Syntax>

        <h2>Examples</h2>
        <h3>1. Simple If/Else</h3>
        <SimpleIf />
        <h4>Code</h4>
        <Syntax language="react" style={atomOneLight}>
          {`  const [option, setoption] = useState(true);

  return (
    <Conditional>
      <If>
        <p>IT'S TRUE 🗿🗿🗿</p>
      </If>
      <Else>Darn it it's false!</Else>
    </Conditional>
  );`}
        </Syntax>
        <h3>2. Simple Switch Statement</h3>
        <SimpleSwitch />
        <h4>Code</h4>
        <Syntax language="react" style={atomOneLight}>
          {`  const [option, setoption] = useState("initial value");

  return (
      <Conditional condition={option}>
        <Switch>
          <Case value="initial value"></Case>
          <Default></Default>
        </Switch>
      </Conditional>
    )`}
        </Syntax>
        <h1>API</h1>
        <small>What does this thing provide?</small>
        <p>
          React Reconditioned provides a utilitarian set of components that will
          make your life SO much easier !
        </p>
        <h4>{"<Conditional />"}</h4>
        <p>
          This is the overarching API exposed by this library that takes in the
          condition. Boolean for if/else statements and strings/objects whatever
          for switch statements.
        </p>
        <h4>{"<If /> & <Else />"}</h4>
        <p>
          The two babies of the conditional component. If the statement resolves
          to true, it'll show the If component, else it will show the Else
          component and it's children.
        </p>
        <h4>{"<Switch /> + <Case /> & <Default />"}</h4>
        <p>
          The Switch component can only show one component at a time and
          resolves the condition from it's parent Conditional component. The
          case takes in a value and checks if the condition is equal to the
          condition in the parent Conditional component. The Switch component
          defaults to the Default component if no conditions are met.
        </p>
        <footer>
          <p>Developed and mainted by:</p>
          <p>
            <b>
              <a href="https://alekangelov.com">Alek Angelov</a>
            </b>
          </p>
          <p>
            <a href="https://www.npmjs.com/package/react-reconditioned">npm</a>
            {" | "}
            <a href="https://github.com/alekangelov">github</a>
            {" | "}
            <a href="https://twitter.com/39strife">twitter</a>
          </p>
        </footer>
      </div>
    );
  }
}

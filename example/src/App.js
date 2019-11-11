import React, { Component } from "react";

import { Conditional, If, Else } from "conditional-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Conditional condition={true}>
          <If>jako</If>
          <Else>najjako</Else>
        </Conditional>
      </div>
    );
  }
}

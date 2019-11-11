import React, { Component } from "react";

import {
  Conditional,
  If,
  Else,
  Switch,
  Case,
  Default
} from "conditional-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Conditional condition={true}>
          <If>true</If>
          <Else>false</Else>
        </Conditional>
        <Conditional condition="alek">
          <Switch>
            <Case match="alek">alek</Case>
            <Case match="neAlek">neAlek</Case>
            <Default>Default</Default>
          </Switch>
        </Conditional>
      </div>
    );
  }
}

# React Reconditioned

![react-reconditioned logo](https://alekangelov.github.io/react-reconditioned/static/media/conditional.8d1fc3dc.png)

> Declarative ternary operations for the masses!

[![NPM](https://img.shields.io/npm/v/conditional-react.svg)](https://www.npmjs.com/package/react-reconditioned) [![React Recon](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[THE DOCS](https://alekangelov.github.io/react-reconditioned)

## Install

```bash

npm install --save conditional-react

```

## Description

It's pretty simple, really. Import the components and declare your logic!

## Usage

```jsx
<Conditional>
  <If>
    <p>IT'S TRUE 🗿🗿🗿</p>
  </If>

  <Else>Darn it it's false!</Else>
</Conditional>
```

## Examples

### 1. Simple If/Else

```jsx
const [option, setoption] = useState(true);

return (
  <Conditional>
    <If>
      <p>IT'S TRUE 🗿🗿🗿</p>
    </If>
    <Else>Darn it it's false!</Else>
  </Conditional>
);
```

### 2. Simple Switch Statement

```jsx
const [option, setoption] = useState("initial value");

return (
  <Conditional condition={option}>
    <Switch>
      <Case value="initial value"></Case>
      <Default></Default>
    </Switch>
  </Conditional>
);
```

## API

> What does this thing provide?

Conditional React provides a utilitarian set of components that will
make your life SO much easier !

### <Conditional />

This is the overarching API exposed by this library that takes in the
condition. Boolean for if/else statements and strings/objects whatever for switch statements.

### <If /> & <Else />

The two babies of the conditional component. If the statement resolves to true, it'll show the If component, else it will show the Else component and it's children.

### <Switch /> + <Case /> & <Default />

The Switch component can only show one component at a time and
resolves the condition from it's parent Conditional component. The
case takes in a value and checks if the condition is equal to the
condition in the parent Conditional component. The Switch component
defaults to the Default component if no conditions are met.

## License

MIT © [alekangelov](https://github.com/alekangelov)

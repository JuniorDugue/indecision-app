"use strict";

console.log("App is running");

//JSX - JavaScript XML 

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "Does this change!?"
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: "#" },
        "Home"
      )
    ),
    React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: "#" },
        "Services"
      )
    ),
    React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: "#" },
        "Gallery"
      )
    ),
    React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: "#" },
        "Contact"
      )
    )
  )
);

var user = {
  name: 'jay R',
  age: 32,
  location: 'Broward'
};

var userName = 'jRbugz';
var userAge = 25;
var userLocation = 'Miami';
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    userName.toUpperCase()
  ),
  React.createElement(
    "h2",
    null,
    user.name
  ),
  React.createElement(
    "h3",
    null,
    user.age
  ),
  React.createElement(
    "h4",
    null,
    user.location
  ),
  React.createElement(
    "p",
    null,
    userAge
  ),
  React.createElement(
    "p",
    null,
    userLocation.toLowerCase()
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
// ReactDOM.render(template, appRoot);

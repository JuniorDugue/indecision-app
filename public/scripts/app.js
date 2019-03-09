'use strict';

console.log("App is running");

//JSX - JavaScript XML 

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: '#' },
        'Home'
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: '#' },
        'Services'
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: '#' },
        'Gallery'
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        'a',
        { href: '#' },
        'Contact'
      )
    )
  )
);

// =========================================================================================


var count = 0;
var addOne = function addOne() {
  count++;
  // console.log("addOne");
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  // console.log("minusOne");
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  // console.log("reset");
  renderCounterApp();
};

// console.log(templateTwo)
var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          console.log("some value here");
        } },
      '+2'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

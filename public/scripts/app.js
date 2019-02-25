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

var user = {
  age: 16
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  } else {
    return undefined;
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : "Anoymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location),
  React.createElement(
    'h3',
    null,
    'my h3'
  )
);

var appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);

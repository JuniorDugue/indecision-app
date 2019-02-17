console.log("App is running");

//JSX - JavaScript XML 

// var template = <p>This is JSX from app.js!</p>

var template = React.createElement("p", {
  id: "app"
}, "This is something NEW!");

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
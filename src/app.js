console.log("App is running");

//JSX - JavaScript XML 

var template = (
  <div>
    <h1>Indecision App</h1> 
    <p>Does this change!?</p>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
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

var user = {
  name: 'jay R',
  age: 32, 
  location: 'Broward'
};

var userName = 'jRbugz';
var userAge = 25;
var userLocation = 'Miami';
var templateTwo = (
  <div>
    <h1>{userName.toUpperCase()}</h1>
    <h2>{user.name}</h2>
    <h3>{user.age}</h3>
    <h4>{user.location}</h4>
    <p>{userAge}</p>
    <p>{userLocation.toLowerCase()}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
// ReactDOM.render(template, appRoot);
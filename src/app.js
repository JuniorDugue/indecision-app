console.log("App is running");

//JSX - JavaScript XML 

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var template = (
  <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>);

var user = {
  age: 16,
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anoymous"}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    {<h3>my h3</h3>}
  </div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);
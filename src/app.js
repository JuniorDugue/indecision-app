console.log("App is running");

//JSX - JavaScript XML 

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

let template = (
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


// =========================================================================================


  let count = 0;
  const addOne = () => {
    count++;
    // console.log("addOne");
    renderCounterApp();
  };

  
  const minusOne = () => {
    count--;
    // console.log("minusOne");
    renderCounterApp();
  }

  const reset = () => {
    count = 0;
    // console.log("reset");
    renderCounterApp();
  }

// console.log(templateTwo)
const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={() => {
        console.log("some value here");
      }}>+2</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
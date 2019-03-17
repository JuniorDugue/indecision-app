console.log("App is running");

//JSX - JavaScript XML 

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault(); 
  // console.log("form submitted!"); //console log to test that the form is submitting
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

//challenge
//create "Remove All" button above list
//on click -> wipe the array -> rerender

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p> 
      <button onClick={onRemoveAll}>Remove All</button>
      {
        [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>, <p key="4">d</p>]
      }
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}> 
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
    );

    ReactDOM.render(template, appRoot);
};

  
  render();

// =========================================================================================
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Assignment 8, Justin Lindo</h1>

        <p>Enter a list of names with each name seperated by a space.
        <br>With Replacement: randomly selects a name and puts it back into the pool of names 
        <br>Without Replacement: generates random name without returning it to the pool. 
        <br>Clear Text Fields: clears input, and output.</p>

        <form method="post" action="https://cs.gmu.edu:8443/offutt/servlet/formHandler">

        <p>Input:<input name="nameList" placeholder="Enter list here" size="65" value=""></p>
        <p>Output: <input size="65" placeholder="Chosen name will appear here" readonly="" value=""></p>
        <button type="submit" name="operation" value="With Replacement">With Replacement</button>
        <button type="submit" name="operation" value="Without Replacement">Without Replacement</button>
        <button type="submit" name="operation" value="Clear Text Fields">Clear Text Fields</button>

        </form>

        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
      </header>
    </div>
  );
}

export default App;

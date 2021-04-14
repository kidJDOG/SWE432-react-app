import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    // Dictionary of state of the user input (value), and output
    this.state = {
      // User input
      value: '',
      // Output, depending on what button is clicked
      output: ''
    };

    // Handling change to the input asyncronously 
    this.handleChange = this.handleChange.bind(this);
    // Functions for the buttons
    this.withReplace = this.withReplace.bind(this);
    this.withoutReplace = this.withoutReplace.bind(this);
    this.clear = this.clear.bind(this);

  }

  // For updating the state of the input when a user types, so it displays 
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // Function for choosing one randome string, and having it remain in the collection
  withReplace() {
    // Split the string into a list, by spaces
    const stringList = this.state.value.split(" ");
    // Choose the random string
    var randomString = stringList[Math.floor(Math.random() * stringList.length)];
    // Output the random string
    this.setState({output: randomString});
  }

  // For choosing random string, and removing it from the collection
  withoutReplace() {    
    // Split the string into a list, by spaces
    var stringList = this.state.value.split(" ");
    // Choose the random string
    var randomString = stringList[Math.floor(Math.random() * stringList.length)];
    // Output the random string
    this.setState({output: randomString});

    // Now time to remove it from the list, and then update the new input display 
    // Remove the item from the array
    const newList = [].concat(stringList); // Clone array with concat or slice(0)
    newList.splice(randomString.index, 1);
    stringList = newList;
    // Then update the new input values to the display, everything but the removed value
    this.setState({value: stringList.join(" ")});

  }

  // Clear the input value, and output
  clear() {
    this.setState({value: ""});
    this.setState({output: ""});
  }

  // Rendering the html
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Assignment 8<br/>Justin Lindo</h1>

          <p>Enter a list of names with each name seperated by a space.
          <br/><div className="title">With Replacement:</div> randomly selects a name, and it remains in the collection 
          <br/><div className="title">Without Replacement:</div> randomly selects a name, and removes it from the collection
          <br/><div className="title">Clear Text Fields:</div> clears input, and output.</p>


          <p>Input: <input name="stringInput" id="stringInput" placeholder="Enter names seperated by spaces here" size="65" value={this.state.value} onChange={this.handleChange}/></p>
          
          <div className="output">
            <h2>Output: { this.state.output }</h2>
          </div>

          <button type="submit" name="operation" value="With Replacement" onClick = {this.withReplace}>With Replacement</button>
          <button type="submit" name="operation" value="Without Replacement" onClick = {this.withoutReplace}>Without Replacement</button>
          <button type="submit" name="operation" value="Clear Text Fields" onClick = {this.clear}>Clear Text Fields</button>

          <h3>Github Repo:</h3>
          <a
            className="Repo-link"
            href="https://github.com/kidJDOG/SWE432-react-app/blob/main/src/App.js"
            target="_blank"
            rel="noopener noreferrer"
          >
          App.js
          </a>
          <a
            className="Repo-link"
            href="https://github.com/kidJDOG/SWE432-react-app/blob/main/public/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
          index.html
          </a>
          <a
            className="Repo-link"
            href="https://github.com/kidJDOG/SWE432-react-app/tree/main/src"
            target="_blank"
            rel="noopener noreferrer"
          >
          src: App.css, App.js, index.css, index.js
          </a>
          <a
            className="Repo-link"
            href="https://github.com/kidJDOG/SWE432-react-app/tree/main/public"
            target="_blank"
            rel="noopener noreferrer"
          >
          public
          </a>




        </header>
      </div>
    );
  }


}
export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  
  constructor(props) {
    super(props);

    // Dictionary of state of the user input (value), and output
    this.state = {
      // User input
      value1: '',
      value2: '',
      value3: '',
      output: ''
    };

    // Handling change to the input asyncronously 
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    // Functions for the buttons
    this.clear = this.clear.bind(this);

  }

  // For updating the state of the input when a user types, so it displays 
  handleChange1(event) {
    this.setState({value1: event.target.value});
  }

  handleChange2(event) {
    this.setState({value2: event.target.value});
  }

  handleChange3(event) {
    this.setState({value3: event.target.value});
  }
  
  // Clear the input value, and output
  clear() {
    this.setState({value1: "", value2: "", value3: ""});
  }

  // Rendering the html
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Practice Final<br/>Justin Lindo</h1>

          <p>Enter three strings, and choose order of concatenation of the strings.</p>


          <p>String 1: <input name="stringInput" id="stringInput" placeholder="" size="65" value={this.state.value1} onChange={this.handleChange1}/></p>
          <p>String 2: <input name="stringInput" id="stringInput" placeholder="" size="65" value={this.state.value2} onChange={this.handleChange2}/></p>
          <p>String 3: <input name="stringInput" id="stringInput" placeholder="" size="65" value={this.state.value3} onChange={this.handleChange3}/></p>
          <div className="output">
            <h2>Output: { this.state.output }</h2>
          </div>

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

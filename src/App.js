import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  
  constructor(props) {
    super(props);

    // Dictionary of state of the user input (value), and output
    this.stringOne = {
      // User input
      value: ''
    };

    this.stringTwo = {
      value: ''
    };

    this.stringThree = {
      value: ''
    };

    this.returnString = "";

    // Handling change to the input asyncronously 
    this.stringOneChange = this.stringOneChange.bind(this);
    this.stringTwoChange = this.stringTwoChange.bind(this);
    this.stringThreeChange = this.stringThreeChange.bind(this);

  }


  // For updating the state of the input when a user types, so it displays 
  stringOneChange(event) {
    this.stringOne({value: event.target.value});
  }

  stringTwoChange(event) {
    this.stringTwo({value: event.target.value});
  }

  stringThreeChange(event) {
    this.stringThree({value: event.target.value});
  }


  concatenate() {
    this.returnString = this.stringOne.value + this.stringTwo.value + this.stringThree.value;
  }

  // Clear the input value, and output
  clear() {
    this.setState({value: ""});
  }

  // Rendering the html
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Practice Final<br/>Justin Lindo</h1>

          <p>Enter three strings, and choose order of concatenation of the strings.</p>


          <p>String 1: <input name="stringInput" id="stringInput" placeholder="" size="65" value={this.stringOne.value} onChange={this.stringOneChange}/></p>
          <p>String 2: <input name="stringInput" id="stringInput" placeholder="" size="65" value={this.stringTwo.value} onChange={this.stringTwoChange}/></p>
          <p>String 3: <input name="stringInput" id="stringInput" placeholder="" size="65" value={this.stringThree.value} onChange={this.stringThreeChange}/></p>
          <div className="output">
            <h2>Output: { this.returnString }</h2>
          </div>

          <button type="submit" name="operation" value="concatenate" onClick = {this.concatenate}>concatenate</button>

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

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
      output: '',
      seperate: false,
      sepDisplay: "Off"
    };

    // Handling change to the input asyncronously 
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    // Functions for the buttons
    this.clear = this.clear.bind(this);
    this.order1 = this.order1.bind(this);
    this.order2 = this.order2.bind(this);
    this.order3 = this.order3.bind(this);
    this.order4 = this.order4.bind(this);
    this.order5 = this.order5.bind(this);
    this.order6 = this.order6.bind(this);

    this.seperate = this.seperate.bind(this);

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

  order1() {
    if (this.state.seperate === false) {
      this.setState({output: this.state.value1 + this.state.value2 + this.state.value3})
    }
    else {
      this.setState({output: this.state.value1 + " " + this.state.value2 + " " + this.state.value3})
    }
  }
  order2() {
    if (this.state.seperate === false) {
      this.setState({output: this.state.value1 + this.state.value3 + this.state.value2})
    }
    else {
      this.setState({output: this.state.value1 + " " + this.state.value3 + " " +this.state.value2})
    }
  }
  order3() {
    if (this.state.seperate === false) {
      this.setState({output: this.state.value2 + this.state.value1 + this.state.value3})
    }
    else {
      this.setState({output: this.state.value2 + " " + this.state.value1 + " " + this.state.value3})
    }
  }
  order4() {
    if (this.state.seperate === false) {
      this.setState({output: this.state.value2 + this.state.value3 + this.state.value1})
    }
    else {
      this.setState({output: this.state.value2 + " " + this.state.value3 +  " " + this.state.value1})
    }
  }
  order5() {
    if (this.state.seperate === false) {
      this.setState({output: this.state.value3 + this.state.value2 + this.state.value1})
    }
    else {
      this.setState({output: this.state.value3 + " " + this.state.value2 + " " + this.state.value1})
    }
  }
  order6() {
    if (this.state.seperate === false) {
      this.setState({output: this.state.value3 + this.state.value1 + this.state.value2})
    }
    else {
      this.setState({output: this.state.value3 + " " + this.state.value1 + " " + this.state.value2})
    }
  }

  seperate() {
    if (this.state.seperate === false) {
      this.setState({seperate: true, sepDisplay: "On"})
    }
    else {
      this.setState({seperate: false, sepDisplay: "Off"})
    }

  }
  // Rendering the html
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Practice Final<br/>Justin Lindo</h1>

          <p>Enter three strings, and choose order of concatenation of the strings.</p>
          <p>You can revise the strings at anytime, and resubmit</p>


          <p>String 1: <input name="stringInput" id="stringInput" placeholder="" size="65" value={this.state.value1} onChange={this.handleChange1}/></p>
          <p>String 2: <input name="stringInput" id="stringInput" placeholder="" size="65" value={this.state.value2} onChange={this.handleChange2}/></p>
          <p>String 3: <input name="stringInput" id="stringInput" placeholder="" size="65" value={this.state.value3} onChange={this.handleChange3}/></p>

          
          <button type="submit" name="operation" value="seperate" onClick = {this.seperate}>Separator</button>
          <p>Seperator: {this.state.sepDisplay}</p>

          <h4>Choose your order:</h4>

          <button type="submit" name="operation" value="order1" onClick = {this.order1}>Order: 1, 2, 3</button>
          <button type="submit" name="operation" value="order2" onClick = {this.order2}>Order: 1, 3, 2</button>

          <button type="submit" name="operation" value="order3" onClick = {this.order3}>Order: 2, 1, 3</button>
          <button type="submit" name="operation" value="order4" onClick = {this.order4}>Order: 2, 3, 1</button>

          <button type="submit" name="operation" value="order5" onClick = {this.order5}>Order: 3, 2, 1</button>
          <button type="submit" name="operation" value="order6" onClick = {this.order6}>Order: 3, 1, 2</button>



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

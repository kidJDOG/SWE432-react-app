import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  
  constructor(props) {
    super(props);


    // Dictionary of state of the user input (value), and output
    this.state = {
      // User input
      input: '',
      average: '',
      type_output: '',
      type: ""
    };

    // Handling change to the input asyncronously 
    this.handleChange1 = this.handleChange1.bind(this);
    // Functions for the buttons
    this.mean = this.mean.bind(this);
    this.median = this.median.bind(this);
    this.mode = this.mode.bind(this);
    this.standardDeviation = this.standardDeviation.bind(this);
    this.clear = this.clear.bind(this);
    // Helper functions
    this.average = this.average.bind(this);


  }

  // For updating the state of the input when a user types, so it displays 
  handleChange1(event) {

    this.setState({input: event.target.value});

    //this.setState()
    var list = event.target.value.split(" ");


    var average = 0;
    var count = 0;

    for (const [i, v] of list.entries()) {

      if (isNaN(v)) {
        this.setState({average: "Please input only numbers, seperated by spaces"});
        //this.setState({input: ""});
        return;
      }

      average += parseFloat(v, 10);
      count += 1;
    }

    average /= count;

    this.setState({average: average});

    //this.setState({input: event.target.value});

    //if ()

    //this.setState({average: list});
  }

  // If the Mean button is pressed
  mean(event) {
    // Set the type displayed to "Mean" for confirmation for the user
    this.setState({type: "Mean"});
    // And set it equal to the average, which has alredy been calculated asynchronously  
    this.setState({type_output: this.state.average})
  }

  // For when the Median button is pressed
  median(event) {

    // Set the type displayed to "Median" for confirmation for the user
    this.setState({type: "Median"});

    // Create an array from the input, seperated by spaces
    var sorted_array = this.state.input.split(" ");
    // Sort the array into ascending order
    sorted_array = sorted_array.sort( (a, b) => a - b );

    var median_index = 0;
    var median = "";
    
    // If the length of the array is even
    if (sorted_array.length % 2 === 0) {
      // Divide the array length by 2
      median_index = (sorted_array.length/2) - 1;
      // Go to the number at that position
      median = parseFloat(sorted_array[median_index]);
      // and average it with the number in the next higher position to get the median
      median += parseFloat(sorted_array[median_index + 1]);
      median /= 2;
    }

    // Otherwise, the length of the array is odd
    else {
      // Divide length by 2, and round up to get the median index 
      median_index = Math.ceil(sorted_array.length/2);
      median = sorted_array[median_index];
    }

    // Set the type_output to be displayed to the median number
    this.setState({type_output: median});

  }

  // If the user presses the Mode button
  mode(event) {
    this.setState({type: "Mode"});

    // Create an array from the input, seperated by spaces
    var sorted_array = this.state.input.split(" ");
    // Sort the array into ascending order
    sorted_array = sorted_array.sort( (a, b) => a - b );

    // Set the current number equal to the first value in the sorted array
    var currNum = parseFloat(sorted_array[0]);
    // For keeping track of the current max occuring number, start with the first group of numbers
    var currMax = parseFloat(sorted_array[0]);
    // For keeping track of the current max occuring number number of occurences 
    var currMaxOcur = 0;
    // For keeping track of the current numbers occurences
    var currOcur = 0;

    for (const [i, v] of sorted_array.entries()) {

      // If the current number is equal to the current number in the array
      if (currNum == parseFloat(v)) {
        // Add 1 to the current occurences of the number
        currOcur += 1;
      }

      // If it doesn't hit the if statement above, it means we are on a new number:

      // Else if, the current max number is <= to the current 
      else if (currMaxOcur <= currOcur) {
        // Set the current max number equal to the current number which would be the index before
        currMax = currNum;
        // Set the current max occurences to the current numbers occurences as well to keep track
        currMaxOcur = currOcur;
        // Reset current occurences since on new number
        currOcur = 0;
      }

      // Else, just move onto the new number, and reset current occurences for the new number
      else {
        currOcur = 0;
      }

      currNum = parseFloat(v);

    }

    this.setState({type_output: currMax});

  }
  
  // If the Standard Deviation button is pressed
  standardDeviation(event) {
    // Set the type displayed to "Standard Deviation" for confirmation for the user
    this.setState({type: "Standard Deviation"});

    // Create an array from the input
    var array = this.state.input.split(" ");
    // Array for storing the squared differences
    var sqr_diffs = [];
    // For keeping track of the current squared difference number
    var curr_sqr_diff = 0;
    // Go through the array 
    for (const [i, v] of array.entries()) {
      // Set the current num to the curr_sqr_diff
      curr_sqr_diff = parseFloat(v);
      // For each number: subtract the mean,
      curr_sqr_diff -= this.state.average;
      // and square the result
      curr_sqr_diff = Math.pow(curr_sqr_diff, 2);

      // Then append that number to the list of squared differences
      sqr_diffs.push(curr_sqr_diff);
    }

    
    // Then find the mean/average of those squared differences
    var sqr_diffs_mean = this.average(sqr_diffs);

    // Then take the square root of that result, and this would be the standard deviation
    var sd = Math.sqrt(sqr_diffs_mean);

    this.setState({type_output: sd});

  }

  // Helper function for calculating the average of an array of numbers
  average(array){

    var sum = 0;
    var count = 0;
    // Go through the array, and add up the sum, and total numbers in the array
    for (const [i, v] of array.entries()) {
    
      sum += parseFloat(v);
      count += 1;

    }

    // Return the average, which is the sum of the numbers in the array divided by the length of the
    return sum /= count;

  }

  // Clear the input value, and output
  clear() {
    this.setState({input: ""});
    this.setState({average: ""});
    this.setState({type: ""});
    this.setState({type_output: ""});
  }


  // Rendering the html
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>SWE 432 Final<br/>Justin Lindo</h1>

          <ul>MRE:
          <li>Accepts a list of integer values by seperating the input by spaces,</li>
          <li>and can return the average/mean, median, and mode</li>
          </ul>

          <ul>OREs:
          <li>1. Can type Double Values</li>
          <li>2. Can choose to get Standard Deviation of the numbers</li>
          </ul> 

          <p>Integer Values: <input name="stringInput" id="stringInput" placeholder="" size="65" value={this.state.input} onChange={this.handleChange1}/></p>

          <p>Average/Mean: { this.state.average }</p>
          

          <h4>Choose mean, median, or mode:</h4>

          <button type="submit" name="operation" value="mean" onClick = {this.mean}>Mean</button>
          <button type="submit" name="operation" value="median" onClick = {this.median}>Median</button>
          <button type="submit" name="operation" value="mode" onClick = {this.mode}>Mode</button>
          <button type="submit" name="operation" value="mode" onClick = {this.standardDeviation}>Standard Deviation</button>



          <div className="output">
            <h2>{this.state.type}: { this.state.type_output }</h2>
          </div>

          <button type="submit" name="operation" value="Clear" onClick = {this.clear}>Clear</button>

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

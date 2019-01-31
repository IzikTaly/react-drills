import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super();

    this.state={
      array: [],
      userInput: ''
    }

    this.handleAddTask = this.handleAddTask.bind( this );
  }

  inputChange( value ) {
    this.setState({userInput: value})
  }

  handleAddTask() {
    this.setState({ 
      list: [...this.state.array, this.state.userInput ], 
      userInput: '' 
    });
  }

  render() {

    let list = this.state.array.map( ( element, index ) => {
      return (
        <Todo key={ index } task={ element } />
      )
    })

    return (
      <div className="App">
       <h4>My To-do list:</h4>

       <div>
        <input
          value = {this.state.userInput}
          placeholder = 'enter new task'
          onChange={(e) => this.inputChange( e.target.value )}
         />

        <button onClick={this.handleAddTask}>Add!</button>
       </div>

       <br />

       { list }
      </div>
    );
  }
}

export default App;

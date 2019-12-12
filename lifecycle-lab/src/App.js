import React from 'react';
import './App.css';
import Todo from "./Components/Todo";
import Submission from "./Components/Submission";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      inputArr: [],
      value: " "
    }
  }

handleSubmit(event) {
  event.preventDefault()
  console.log("submitted")
}

render(){
  return (
    <div className="App">
      <h1>Todo List Demo</h1>
      <Submission />
    </div>
  );
 }
}


export default App;

import React from 'react';
import './App.css';
import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";
import Submission from "./Components/Submission";
import 'react-toastify/dist/ReactToastify.css';
import  { ToastContainer, toast } from 'react-toastify'



class App extends React.Component{
  constructor() {
    super();
    this.state = {
      inputArr: [],
      todoValue: " "
    }
  }
  
  handleChange = (event) => {
    console.log("input change",event.target.value)
    this.setState({
    todoValue: event.target.value
    })
  }

  handleSubmit = (event) => {
  event.preventDefault()
  console.log("submitted")
   const {inputArr, todoValue} = this.state
  this.setState({
    inputArr : [...inputArr, todoValue]
  })

}

handleDelete= (event) => {
  console.log("Deleted")
  let itemDeleted = event.target.value
  const{inputArr} = this.state
  const currArr = inputArr.filter(el => {
    return (el !== itemDeleted);
  })
  this.setState({
    inputArr: currArr
  })
}



render(){
  const {inputArr, todoValue} = this.state

  const newArr = inputArr.map( el => {
    return (
      <Todo 
      key= {el} 
      todoItem={el}
      handleDelete={this.handleDelete}
      />
    )
  })

  return (
    <div className="App">
      <h1>Todo List Demo</h1>
      <Submission 
      handleChange={this.handleChange}
      handleSubmit ={this.handleSubmit}/>

      <TodoList 
      newArr = {newArr}
      />

      <ToastContainer />
    </div>
  );
 }
}


export default App;

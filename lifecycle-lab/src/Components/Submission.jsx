import React from 'react';


// class Submission extends React.Component{
// constructor() {
// super();
// console.log("constructor called")
// }
const Submission = (props) => {

// handleSubmit(event) {
//   event.preventDefault()
//   console.log("submitted")
// }

// render() {
console.log("render called")
return(
      <div className="sub">
      <form onSubmit={props.handleSubmit}>
      <input onChange={props.handleChange} placeholder='Enter Task' />
      </form>
    
    </div>
    )
// }
}


export default Submission;
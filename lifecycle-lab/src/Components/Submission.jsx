import React from 'react';


class Submission extends React.Component{
constructor() {
super();
console.log("constructor called")
}


render() {
console.log("render called")
return<div className="sub">
      <form onSubmit={this.handleSubmit}>
      <input type='text' placeholder='Enter Task'/>
      </form>
    </div>
}
}


export default Submission;
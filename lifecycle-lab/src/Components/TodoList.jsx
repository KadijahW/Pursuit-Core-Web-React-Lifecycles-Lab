import React from 'react';

const TodoList = (props) => {
    const {newArr} = props
return (
<div>
<ul>{newArr}</ul>
</div>
)
}

export default TodoList;
import React from 'react';


const Todo = (props) => {
    const { todoItem, handleDelete} = props;

    return (
<div>
    <li>
        <p>{todoItem} <button onClick={handleDelete} value={todoItem}>x</button> </p>

    </li>
</div>
    )
}
export default Todo;

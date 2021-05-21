import React from 'react'

const TodoItem = (props) => {
    return (
        <div className='alert alert-info'>
            <h4>{props.task.title}</h4>
            <p>{props.task.description}</p>
            <button className="btn btn-sm btn-danger" onClick={() => props.onDelete(props.task)}>Delete</button>
        </div>
    )
}

export default TodoItem;
import React from 'react'
import TodoItem from './TodoItem';

const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center">Tasks</h3>
            {/* <TodoItem task={props.tasks[0]}/>
            <TodoItem task={props.tasks[1]}/>
            <TodoItem task={props.tasks[2]}/> */}
            {props.tasks.length === 0 ? "No tasks to display" :
                props.tasks.map(task => {
                    return <TodoItem task={task} key={task.key} onDelete={props.onDelete} />
                })}
        </div>
    )
}

export default Todos;

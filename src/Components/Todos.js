import React from 'react'
import TodoItem from './TodoItem';

const Todos = (props) => {
    let myStyle = {
        minHeight: '100vh',
        margin: '30px auto',
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">Tasks</h3>
            {/* <TodoItem task={props.tasks[0]}/>
            <TodoItem task={props.tasks[1]}/>
            <TodoItem task={props.tasks[2]}/> */}
            {props.tasks.length === 0 ? "No tasks to display" :
                props.tasks.map(task => {
                    return (
                        <>
                            <TodoItem task={task} key={task.key} onDelete={props.onDelete} /> <hr />
                        </>
                    )
                })}
        </div>
    )
}

export default Todos;

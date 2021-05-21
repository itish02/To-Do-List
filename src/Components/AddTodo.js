import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    const descHandler = (event) => {
        setDesc(event.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert('Title or Description cannot be blank!')
        }
        props.addTodo(title, desc);
    }

    return (
        <div className="container my-3 alert alert-secondary">
            <h3>Add a task</h3>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title">To-do Title</label>
                    <input type="text" value={title} onChange={titleHandler} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task description</label>
                    <input type="text" value={desc} onChange={descHandler} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo;

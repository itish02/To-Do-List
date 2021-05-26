import './App.css';
import Navigation from './Components/Navigation';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo'
import React, { useState, useEffect } from 'react';

console.log(window.localStorage);

function App() {
  let initTodos;
  if (!localStorage.getItem('todos')) {
    initTodos = [];
  }
  else {
    initTodos = JSON.parse(localStorage.getItem('todos'));
  }
  const [task, setTask] = useState(initTodos);
  const deleteHandler = (target) => {
    setTask(task.filter((t) => {
      return t !== target
    }))
    localStorage.getItem('todos');
  }

  const addTodo = (title, desc) => {
    console.log('I am adding this todo - ', title, desc);
    let key;
    if (task.length === 0) {
      key = 0;
    }
    else {
      key = task[task.length - 1].key + 1;
    }
    const myTodo = {
      key: key,
      title: title,
      description: desc,
    }
    setTask([...task, myTodo]);
    console.log(myTodo);

    if (localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(task));
    }
  };
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task])

  return (
    <div>
      <Navigation title="To Do List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos tasks={task} onDelete={deleteHandler} />
      <Footer />
    </div>
  );
}

export default App;

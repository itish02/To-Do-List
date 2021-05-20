import './App.css';
import Navigation from './Components/Navigation';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, { useState } from 'react';

function App() {
  // const tasks = [
  //   {
  //     key: 1,
  //     title: 'Go to the market',
  //     description: 'Need to buy groceries and cat food for shakti'
  //   },

  //   {
  //     key: 2,
  //     title: 'Dishes',
  //     description: 'Clean the shit-pile of dishes lying in the sink'
  //   },

  //   {
  //     key: 3,
  //     title: 'Guitar',
  //     description: 'Continue with the guitar lessons'
  //   },
  // ]

  const [task, setTask] = useState(
    [
      {
        key: 1,
        title: 'Go to the market',
        description: 'Need to buy groceries and cat food for shakti'
      },
  
      {
        key: 2,
        title: 'Dishes',
        description: 'Clean the shit-pile of dishes lying in the sink'
      },
  
      {
        key: 3,
        title: 'Guitar',
        description: 'Continue with the guitar lessons'
      },

      {
        key: 4,
        title: 'Code',
        description: 'Continue with learning React'
      }
    ]
  );
  const deleteHandler = (target) => {
    console.log('I am onDelete of task -', target);
    setTask(task.filter((t) => {
      return t !== target
    }))
  }
  return (
    <div>
      <Navigation title="To Do List" searchBar={true} />
      <Todos tasks={task} onDelete={deleteHandler} />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import TodoContext from '../context/TodoContext';
import Navbar from './Navbar';
import ToDoList from './ToDoList';
 
const App = () => (
  <TodoContext>
    <div className="uk-container">
      <Navbar></Navbar>
      <ToDoList></ToDoList>
    </div>
  </TodoContext>
)
        
export default App;

import React from 'react';
import logo from './assets/logo.svg';
import Navbar from './Navbar';
import ToDoList from './ToDoList';
 
const App = () => {
    return (
      <div className="uk-container">
        <Navbar></Navbar>
        <ToDoList></ToDoList>
      </div>
    );
  }
        
export default App;

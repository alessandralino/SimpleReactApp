import React, { useContext } from 'react';
import {TodoContext} from '../context/TodoContext';
import { TodoContextType } from '../context/TodoContextType';
import TodoListItem from './ToDoListItem';

const ToDoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext);
    
    return(
        <table className="uk-table">
        <caption></caption>
        <thead>
            <tr>
                <th>#</th>
                <th>Descrição</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
           {
               todos.map(
                   todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
               )              
           }              
        </tbody>
    </table>
    );
};

export default ToDoList;
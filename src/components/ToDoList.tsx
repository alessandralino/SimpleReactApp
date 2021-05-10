import React from 'react';
import { Todo } from '../models/Todo';
import TodoListItem from './ToDoListItem';

const ToDoList = () => {
    const todos : Todo[] = [
        { id: 1, title: 'Ir ao supermercado', done: false},
        { id: 2, title: 'Ir a acdemia', done: false}
    ];
    
    return(
        <table className="uk-table">
        <caption>Lista de tarefas</caption>
        <thead>
            <tr>
                <th>#</th>
                <th>Tarefa</th>
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
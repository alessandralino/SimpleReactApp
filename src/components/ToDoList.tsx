import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoContextType } from '../context/TodoContextType';
import TodoListItem from './ToDoListItem';


const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext);

    return (
        <table className="uk-table">
            <caption>Lista de tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                    )
                }
            </tbody>
        </table>
    );
}
export default TodoList;
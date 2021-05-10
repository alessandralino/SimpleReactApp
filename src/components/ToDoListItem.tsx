import React, { useContext } from 'react';
import { Todo } from '../models/Todo';

const TodoListItem = () => {
    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox"  type="checkbox"/>
                </label>
            </td>
            <td className="uk-width-expand">
                Item
            </td>
            <td className="uk-width-auto">
                <button
                    className="uk-icon-button uk-button-danger"
                    uk-icon="trash">

                </button>
            </td>
        </tr>
    );
}

export default TodoListItem;
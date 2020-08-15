import React from "react";
import {TodoList} from "./TodoList";


function TodoItem({item, handleDelete}) {
    const {id, text} = item;
    return (
        <div>
            <li className="item">
                <div className="info">
                    <span className="text">{text}</span>
                </div>
                <div>
                    <button className="btn" area-label="delete button" onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </li>
        </div>
    )
}
export default TodoItem;
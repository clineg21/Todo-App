import React from "react";
import Item from "./TodoItem";
import TodoItem from "./TodoItem";

function TodoList({todos, handleDelete, clearItems}) {
    return (
        <div>
            <ul className="list">
                {todos.map((item) => {
                    return <TodoItem key={item.id} item={item} handleDelete={handleDelete} />
                })}
            </ul>
            {todos.length > 0 && <button className="btn" onClick={clearItems}>
                Clear List    
            </button>}
        </div>
    )
}
export default TodoList;
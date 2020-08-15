import React, {useState} from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const initialList = ([
  {id: uuid(), text: 'Learn React'},
  {id: uuid(), text: 'Return Book'}
]);

function App() {
  const [todos, setTodos] = useState(initialList);
  const [text, setText] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text !== '') {
      const singleItem = {id: uuid(), text}
      setTodos([...todos, singleItem]);
      setText('');
    }
  }

  const clearItems = (e) => {
    setTodos([]);
  }

  const handleDelete = (id) => {
    let tempTodos = todos.filter(item => item.id !== id);
    setTodos(tempTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div className="App">
        <TodoForm 
          text={text}
          handleText={handleText}  
          handleSubmit={handleSubmit}
        />
        <TodoList 
          todos={todos} 
          handleDelete={handleDelete}
          clearItems={clearItems}
        />
      </div>
    </div>
    
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <div className="app-container">
      <h1 className="app-title">Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
          className="todo-input"
        />
        <button onClick={addTodo} className="add-button">Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
            <div className="button-group">
              <button onClick={() => toggleTodo(index)} className="toggle-button">Toggle</button>
              <button onClick={() => removeTodo(index)} className="remove-button">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
      <h1 className="app-title">Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
          className="todo-input"
        />
        <button onClick={addTodo} className="add-button">Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
            <div className="button-group">
              <button onClick={() => toggleTodo(index)} className="toggle-button">Toggle</button>
              <button onClick={() => removeTodo(index)} className="remove-button">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;

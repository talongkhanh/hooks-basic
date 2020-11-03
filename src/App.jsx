import React, { useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'khanh dep trai' },
    { id: 2, title: 'react hooks basic' },
    { id: 3, title: 'todo list item' },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);

  }

  function handleTodoFormSubmit(formValues) {
    const newTodoList = [...todoList];
    const newTodo = {
      id: Math.trunc(Math.random() * 1000),
      ...formValues
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div className="app">
      <h1>Todo - List</h1>
      <TodoForm
        onSubmit={handleTodoFormSubmit}
      />
      <TodoList
        todos={todoList}
        onTodoClick={handleTodoClick}

      />
    </div>
  );
}

export default App;

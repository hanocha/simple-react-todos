import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => (
  <div className="app">
    <TodoForm />
    <TodoList />
  </div>
);

export default App;

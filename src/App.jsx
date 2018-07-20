import React from 'react';
import { CreateTodo } from './pages/CreateTodo';
import { EditTodo } from './pages/EditTodo';
import { TodoList } from './pages/TodoList';

export const App = () => (
  <div>
    <CreateTodo />
    <TodoList />
  </div>
);

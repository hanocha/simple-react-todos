import * as React from 'react';
import { Link } from 'react-router-dom';
import { IProps, TodoList } from './TodoList';

export const TodoListPage: React.ComponentType<IProps> = ({ todos }) => (
  <div>
    <h1>Todo</h1>
    <Link to="/new">Create</Link>
    <TodoList todos={todos} />
  </div>
);

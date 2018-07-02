import * as React from 'react';
import { IProps, TodoList } from './TodoList';

export const TodoListPage: React.ComponentType<IProps> = ({ todos }) => (
  <React.Fragment>
    <h1>Todo</h1>
    <TodoList todos={todos} />
  </React.Fragment>
);

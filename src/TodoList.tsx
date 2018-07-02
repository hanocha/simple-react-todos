import * as React from 'react';
import { IProps as ITodo, TodoItem } from './TodoItem';

export interface IProps {
  todos: ITodo[],
};

export const TodoList: React.ComponentType<IProps> = ({ todos }) => (
  <ol>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoItem {...todo} />
      </li>
    ))}
  </ol>
);

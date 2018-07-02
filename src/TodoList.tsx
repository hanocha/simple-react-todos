import * as React from 'react';
import { TodoItem } from './TodoItem';

export interface IProps {
  todos: string[],
};

export const TodoList: React.ComponentType<IProps> = ({ todos }) => (
  <ol>
    {todos.map((todo, i) => (
      <li key={i}>
        <TodoItem text={todo} />
      </li>
    ))}
  </ol>
);

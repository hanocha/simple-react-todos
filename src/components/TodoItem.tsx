import * as React from 'react';
import { Link } from 'react-router-dom';
import { ITodo } from '../types';

interface IProps extends ITodo {
  onClick: (_: React.SyntheticEvent) => void;
}

export const TodoItem = ({ id, title, text, onClick }: IProps) => (
  <div>
    <p>{title}</p>
    <p>{text}</p>
    <div style={{ display: 'flex' }}>
      <button>
        <Link to={`/todos/${id}`}>edit</Link>
      </button>
      <button onClick={onClick}>delete</button>
    </div>
  </div>
);

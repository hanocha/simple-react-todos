import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IProps {
  id: string,
  title: string,
  text: string,
  created_at: string,
};

export const TodoItem: React.ComponentType<IProps> = ({ id, title, text }) => (
  <div>
    <p>{title}</p>
    <p>{text}</p>
    <div style={{ display: "flex" }}>
      <Link to={`/todos/${id}`}>edit</Link>
    </div>
  </div>
);

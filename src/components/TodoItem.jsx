import React from 'react';
import { Link } from 'react-router-dom';

export const TodoItem = ({ id, title, text, onClick }) => (
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

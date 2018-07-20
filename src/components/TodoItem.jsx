import React from 'react';

const TodoItem = ({ id, title, text, onClick }) => (
  <div>
    <p>{title}</p>
    <p>{text}</p>
    <div style={{ display: 'flex' }}>
      <button onClick={onClick}>delete</button>
    </div>
  </div>
);

export default TodoItem;

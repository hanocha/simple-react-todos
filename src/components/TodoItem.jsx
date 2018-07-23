import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { id, title, text, onClick } = this.props;
    return (
      <div className="todo-item">
        <p>{title}</p>
        <p>{text}</p>
        <button onClick={onClick}>delete</button>
      </div>
    );
  }
}

export default TodoItem;

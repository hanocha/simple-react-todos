import React from 'react';
import TodoItem from './TodoItem';
import { index, destroy } from '../api';

class TodoList extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    index().then(res => this.setState({ todos: res.data }));
  }

  render() {
    const todos = this.state.todos;
    const handleClick = () => destroy(todo.id);
    return (
      <div>
        <h3>Todo List</h3>
        <ol>
          {todos.map(todo => (
            <li key={todo.id}>
              <TodoItem
                id={todo.id}
                title={todo.title}
                text={todo.text}
                onClick={handleClick}
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default TodoList;

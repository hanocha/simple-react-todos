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
    return (
      <div>
        <h1>Todo</h1>
        <ol>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              <TodoItem {...todo} onClick={() => destroy(todo.id)} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default TodoList;

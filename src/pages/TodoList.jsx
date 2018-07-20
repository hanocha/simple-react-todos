import React from 'react';
import { index, destroy } from '../api';
import { TodoItem } from '../components/TodoItem';

const onClick = todoId => () => destroy(todoId);

export class TodoList extends React.Component {
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
              <TodoItem {...todo} onClick={onClick(todo.id)} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

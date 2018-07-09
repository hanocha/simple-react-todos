import React from 'react';
import { Link } from 'react-router-dom';
import { get, remove } from '../api';
import { TodoItem } from '../components/TodoItem';

const onClick = todoId => () => remove(todoId);

export class TodoList extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    get().then(res => this.setState({ todos: res.data }));
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <Link to="/new">Create</Link>
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

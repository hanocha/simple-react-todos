import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { get } from '../api';
import { IProps as ITodo, TodoItem } from '../components/TodoItem';

export interface IResponse {
  data: ITodo[];
}

export class TodoList extends React.Component<any, any, any> {
  public state = {
    todos: [],
  };

  public componentDidMount() {
    get().then((res: IResponse) => this.setState({ todos: res.data }));
  }

  public render() {
    return (
      <div>
        <h1>Todo</h1>
        <Link to="/new">Create</Link>
        <ol>
          {this.state.todos.map(todo => (
            // @ts-ignore
            <li key={todo.id}>
              <TodoItem {...todo} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

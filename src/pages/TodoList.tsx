import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IProps as ITodo, TodoItem } from '../components/TodoItem';

export interface IResponse {
  data: ITodo[];
}

export class TodoList extends React.Component<any, any, any> {
  public state = {
    todos: [],
  };

  public componentDidMount() {
    axios
      .get('/todos', {
        baseURL: 'https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0',
        headers: {
          Accept: 'application/json',
        },
      })
      .then((res: IResponse) => this.setState({ todos: res.data }));
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

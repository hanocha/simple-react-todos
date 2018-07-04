import axios from 'axios';
import * as React from 'react';
import { IProps as ITodo } from '../TodoItem';
import { TodoListPage } from '../TodoListPage';

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
    return <TodoListPage todos={this.state.todos} />;
  }
}

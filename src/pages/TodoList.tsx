import * as React from 'react';
import { Link } from 'react-router-dom';
import { get, remove } from '../api';
import { TodoItem } from '../components/TodoItem';
import { ITodo } from '../types';

export interface IResponse {
  data: ITodo[];
}

interface IState {
  todos: ITodo[];
}

const onClick = (todoId: string) => () => remove(todoId);

export class TodoList extends React.Component<any, IState, any> {
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
              <TodoItem {...todo} onClick={onClick(todo.id)} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

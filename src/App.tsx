import * as React from 'react';
import { TodoItem } from './TodoItem';

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <h1>Todo</h1>
        <TodoItem />
      </React.Fragment>
    );
  }
}

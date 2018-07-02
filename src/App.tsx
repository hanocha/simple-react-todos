import * as React from 'react';
import { TodoListContainer } from './TodoListContainer';

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <h1>Todo</h1>
        <TodoListContainer />
      </React.Fragment>
    );
  };
};

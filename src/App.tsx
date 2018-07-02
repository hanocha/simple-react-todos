import * as React from 'react';
import { TodoList } from './TodoList';

const sampleArray: string[] = ['test', 'test2', 'test3'];

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <h1>Todo</h1>
        <TodoList todos={sampleArray} />
      </React.Fragment>
    );
  };
};

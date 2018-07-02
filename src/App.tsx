import * as React from 'react';
import { TodoItem } from './TodoItem';

const sampleArray: string[] = ['test', 'test2', 'test3'];

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <h1>Todo</h1>
        {sampleArray.map(
          (text, i) => <TodoItem text={text} key={i} />
        )}
      </React.Fragment>
    );
  };
};

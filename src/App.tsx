import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TodoListContainer } from './TodoListContainer';

export default class App extends React.Component {
  public render() {
    return (
      <Router>
        <React.Fragment>
          <h1>Todo</h1>

          <Route exact={true} path="/" component={TodoListContainer} />
        </React.Fragment>
      </Router>
    );
  };
};

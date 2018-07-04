import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CreateTodoContainer } from './CreateTodoContainer';
import { EditTodoContainer } from './EditTodoContainer';
import { TodoListContainer } from './TodoListContainer';

export const App = () => (
  <Router>
    <div>
      <Route exact={true} path="/" component={TodoListContainer} />
      <Route exact={true} path="/new" component={CreateTodoContainer} />
      <Route path="/todos/:id" component={EditTodoContainer} />
    </div>
  </Router>
);

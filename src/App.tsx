import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CreateTodo } from './pages/CreateTodo';
import { EditTodo } from './pages/EditTodo';
import { TodoList } from './pages/TodoList';

export const App = () => (
  <Router>
    <div>
      <Route exact={true} path="/" component={TodoList} />
      <Route exact={true} path="/new" component={CreateTodo} />
      <Route path="/todos/:id" component={EditTodo} />
    </div>
  </Router>
);

import * as React from 'react';
import { Link } from 'react-router-dom';
import { IProps as ITodoFormProps, TodoForm } from './TodoForm';

export const EditTodoPage: React.ComponentType<ITodoFormProps> = (
  {
    handleChange,
    handleSubmit,
    values: {
      text,
      title,
    },
  },
) => (
  <div>
    <h1>Edit todo</h1>
    <TodoForm {...{
      handleChange,
      handleSubmit,
      values: {
        text,
        title,
      },
    }} />

    <Link to="/">Back to top</Link>
  </div>
);

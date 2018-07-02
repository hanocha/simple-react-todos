import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IProps {
  values: {
    title: string,
    text: string,
  },
  handleChange: any,
  handleSubmit: any,
};

export const CreateTodoPage: React.ComponentType<IProps> = (
  {
    values: {
      title,
      text,
    },
    handleChange,
    handleSubmit,
  },
) => (
  <div>
    <h1>Create todo</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>title:</label>
        <input type="text" name="title" onChange={handleChange} value={title} />
      </div>
      <div>
        <label>text:</label>
        <input type="text" name="text" onChange={handleChange} value={text} />
      </div>
      <div>
        <input type="submit" value="create" />
      </div>
    </form>

    <Link to="/">Back to top</Link>
  </div>
);

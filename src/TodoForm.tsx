import * as React from 'react';

export interface IProps {
  values: {
    title: string,
    text: string,
  },
  handleChange: any,
  handleSubmit: any,
};

export const TodoForm: React.ComponentType<IProps> = (
  {
    values: {
      title,
      text,
    },
    handleChange,
    handleSubmit,
  },
) => (
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
);

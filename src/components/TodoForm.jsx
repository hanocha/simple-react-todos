import React from 'react';

export const TodoForm = (
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
      <input type="submit" value="submit" />
    </div>
  </form>
);

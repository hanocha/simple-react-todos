import * as React from 'react';

export const CreateTodoPage: React.ComponentType<any> = () => (
  <div>
    <h1>Create todo</h1>
    <form>
      <div>
        <label>title:</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label>text:</label>
        <input type="text" name="text" />
      </div>
      <div>
        <input type="submit" value="create" />
      </div>
    </form>
  </div>
);

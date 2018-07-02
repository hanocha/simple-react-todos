import * as React from 'react';

export interface IProps {
  text: string,
};

export const TodoItem: React.ComponentType<IProps> = ({ text }) => (
  <div>{text}</div>
);

import * as React from 'react';

export interface IProps {
  id: string,
  title: string,
  text: string,
  created_at: string,
};

export const TodoItem: React.ComponentType<IProps> = ({ text }) => (
  <div>{text}</div>
);

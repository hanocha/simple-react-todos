import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IProps {
  id: string,
  title: string,
  text: string,
  created_at: string,
};

export const TodoItem: React.ComponentType<IProps> = ({ id, title, text }) => {
  const onClick = () => {
    axios.delete(
      `/todos/${id}`,
      {
        baseURL: "https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0",
        headers: {
          'Accept': 'application/json'
        },
      },
    ).then(res => console.log(res))
  };

  return (
    <div>
      <p>{title}</p>
      <p>{text}</p>
      <div style={{ display: "flex" }}>
        <button>
          <Link to={`/todos/${id}`}>edit</Link>
        </button>
        <button onClick={onClick}>
          delete
        </button>
      </div>
    </div>
  );
}

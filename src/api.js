import axios from 'axios';

export const get = () =>
  axios.get('/todos', {
    baseURL: 'https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0',
    headers: {
      Accept: 'application/json',
    },
  });

export const put = (todoId, requestBody) =>
  axios.put(`/todos/${todoId}`, requestBody, {
    baseURL: 'https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export const post = requestBody =>
  axios.post('/todos', requestBody, {
    baseURL: 'https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export const remove = todoId =>
  axios.delete(`/todos/${todoId}`, {
    baseURL: 'https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0',
    headers: {
      Accept: 'application/json',
    },
  });

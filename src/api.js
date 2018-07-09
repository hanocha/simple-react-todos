import axios from 'axios';

const BASE_URL = 'https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const defaultParams = {
  baseURL: BASE_URL,
  headers: defaultHeaders,
};

export const index = () =>
  axios.get('/todos', defaultParams);

export const show = todoId =>
  axios.get(`/todos/${todoId}`, defaultParams);

export const update = (todoId, requestBody) =>
  axios.put(`/todos/${todoId}`, requestBody, defaultParams);

export const create = requestBody =>
  axios.post('/todos', requestBody, defaultParams);

export const destroy = todoId =>
  axios.delete(`/todos/${todoId}`, defaultParams);

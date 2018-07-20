const BASE_URL = 'https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const index = () =>
  fetch(`${BASE_URL}/todos`, {
    method: 'GET',
    mode: 'cors',
    headers: defaultHeaders,
  }).then(res => res.json());

export const create = requestBody =>
  fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    mode: 'cors',
    headers: defaultHeaders,
    body: JSON.stringify(requestBody),
  }).then(res => res.json());

export const destroy = todoId =>
  fetch(`${BASE_URL}/todos/${todoId}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: defaultHeaders,
  }).then(res => res.json());

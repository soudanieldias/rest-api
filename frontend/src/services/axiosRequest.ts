import axios from 'axios';

const BACKEND_URL = 'http://localhost:3001';

const makePost = async (path:string, body:any, auth:any) => {
  let response;

  if (!auth) {
    response = await axios.post(`${BACKEND_URL}/${path}`, body)
      .catch((error) => error.response);
  }

  if (!body) {
    response = await axios
      .post(`${BACKEND_URL}/${path}`, {}, { headers: { Authorization: auth } })
      .catch((error) => error.response);
  }

  if (body && auth) {
    response = await axios
      .post(`${BACKEND_URL}/${path}`, body, { headers: { Authorization: auth } })
      .catch((error) => error.response);
  }

  return response;
};

const makeGet = async (path:string, body:any) => {

  const response = await axios.get(`${BACKEND_URL}/${path}`)
    .catch((error) => error.response);

  return response;
}

export { makePost, makeGet };

import axios from 'axios';

export const ROOT = 'https://hn.algolia.com';

export const get = (url) => {
  return axios({
    method: 'get',
    url: `${ROOT}${url}`,
    headers: {
      'content-type': 'application/json'
    }
  });
}

import axios from 'axios';

export const ROOT = 'https://hn.algolia.com';

export const get = (url, append) => {
  const finalUrl = append === false ? url : `${ROOT}${url}`;
  return axios({
    method: 'get',
    url: finalUrl,
    headers: {
      'content-type': 'application/json'
    }
  });
}

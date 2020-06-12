import axios from 'axios';
import { storeDataInStorage, getDataFromStorage} from '../../utils/storage';
import {
  ROOT,
  REQUEST_NEWS,
  RECEIVE_NEWS
} from "./types";


export const fetchNewsTopics = page => async dispatch => {

  storeDataInStorage();
  const finalPage = page || 1;
  try {
    dispatch({ type: REQUEST_NEWS });
    const res = await axios.get(`${ROOT}/api/v1/search?page=${finalPage}`);
    dispatch({ type: RECEIVE_NEWS, payload: res.data.hits });
  } catch(e) {
      console.log(e);
    dispatch({ type: RECEIVE_NEWS, payload: {} });
  }
};

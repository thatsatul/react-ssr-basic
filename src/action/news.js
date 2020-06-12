import axios from 'axios';
import { storeDataByPage, getDataByPage} from '../../utils/storage';
import {
  ROOT,
  REQUEST_NEWS,
  RECEIVE_NEWS
} from "./types";


export const fetchNewsTopics = page => async dispatch => {
  dispatch({ type: REQUEST_NEWS });
  const finalPage = page || 1;
  const storedData = getDataByPage(finalPage);
  if(storedData) {
    dispatch({ type: RECEIVE_NEWS, payload: storedData });
  } else {
    try {
      const res = await axios.get(`${ROOT}/api/v1/search?page=${finalPage}`);
      storeDataByPage(finalPage, res.data.hits);
      dispatch({ type: RECEIVE_NEWS, payload: res.data.hits });
    } catch(e) {
        console.log(e);
      dispatch({ type: RECEIVE_NEWS, payload: {} });
    }
  }
};

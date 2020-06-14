import { storeDataByPage, getDataByPage} from '../../utils/storage';
import { get } from '../../utils/request';
import {
  REQUEST_NEWS,
  RECEIVE_NEWS,
  RECEIVE_NEWS_ERROR,
  UPVOTE,
  HIDE_ROW
} from "./types";


export const fetchNewsTopics = page => async dispatch => {
  dispatch({ type: REQUEST_NEWS });
  const finalPage = page || 1;
  const storedData = getDataByPage(finalPage);
  if(storedData) {
    dispatch({ type: RECEIVE_NEWS, payload: storedData });
  } else {
    try {
      const res = await get(`/api/v1/search?page=${finalPage}`);
      storeDataByPage(finalPage, res.data.hits);
      dispatch({ type: RECEIVE_NEWS, payload: res.data.hits || []});
    } catch(e) {
      dispatch({ type: RECEIVE_NEWS_ERROR });
    }
  }
};

export const upVote = (page, index, pageData) => async dispatch => {
  const pageDataCopy = JSON.parse(JSON.stringify(pageData));
  const row = pageDataCopy[index];
  row['points'] = row['points'] + 1;
  storeDataByPage(page, pageDataCopy);
  dispatch({ type: UPVOTE, payload: pageDataCopy });
};

export const hideRow = (page, index, pageData) => async dispatch => {
  const pageDataCopy = JSON.parse(JSON.stringify(pageData));
  const row = pageDataCopy[index];
  row['hide'] = true;
  storeDataByPage(page, pageDataCopy);
  dispatch({ type: HIDE_ROW, payload: pageDataCopy });
};

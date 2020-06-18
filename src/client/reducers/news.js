import {
  REQUEST_NEWS,
  RECEIVE_NEWS,
  RECEIVE_NEWS_ERROR,
  UPVOTE,
  HIDE_ROW
} from "../action/types";

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  isError: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_NEWS: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_NEWS: {
      return { ...state, isFetching: false, data: action.payload };
    }
    case RECEIVE_NEWS_ERROR: {
      return { ...state, isError: true, isFetching: false };
    }
    case UPVOTE: {
      return { ...state, isFetching: false, data: action.payload };
    }
    case HIDE_ROW: {
      return { ...state, isFetching: false, data: action.payload };
    }
    default:
      return state;
  }
};

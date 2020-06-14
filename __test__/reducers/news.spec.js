import reducer from '../../src/reducers/news';
import * as types from '../../src/action/types';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  isError: false
};

describe('newsTopic reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  });

  it('should handle REQUEST_NEWS', () => {
    expect(
      reducer(
        INITIAL_STATE,
        {
          type: types.REQUEST_NEWS,
        }
      )
    ).toEqual(
      {
        ...INITIAL_STATE,
        isFetching: true
      }
    );
  });

  it('should handle RECEIVE_NEWS', () => {
    expect(
      reducer(
        INITIAL_STATE,
        {
          type: types.RECEIVE_NEWS,
          payload: 'test'
        }
      )
    ).toEqual(
      {
        ...INITIAL_STATE,
        isFetching: false,
        data: 'test'
      }
    );
  });

  it('should handle RECEIVE_NEWS_ERROR', () => {
    expect(
      reducer(
        INITIAL_STATE,
        {
          type: types.RECEIVE_NEWS_ERROR
        }
      )
    ).toEqual(
      {
        ...INITIAL_STATE,
        isFetching: false,
        isError: true
      }
    );
  });

  it('should handle HIDE_ROW', () => {
    expect(
      reducer(
        INITIAL_STATE,
        {
          type: types.HIDE_ROW,
          payload: 'test'
        }
      )
    ).toEqual(
      {
        ...INITIAL_STATE,
        isFetching: false,
        data: 'test'
      }
    );
  });

  it('should handle UPVOTE', () => {
    expect(
      reducer(
        INITIAL_STATE,
        {
          type: types.UPVOTE,
          payload: 'test'
        }
      )
    ).toEqual(
      {
        ...INITIAL_STATE,
        isFetching: false,
        data: 'test'
      }
    );
  });
  
});

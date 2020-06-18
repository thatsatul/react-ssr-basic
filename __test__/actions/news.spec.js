import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect'; // You can use any testing library

import * as actions from '../../src/client/action/news';
import * as types from '../../src/client/action/types';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  isError: false
};

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('FetchNews action', () => {
    fetchMock.getOnce('/sample', {
      body: { sample: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.REQUEST_NEWS },
      { type: types.RECEIVE_NEWS, payload: expect.anything() }
    ]
    const store = mockStore(INITIAL_STATE);

    return store.dispatch(actions.fetchNewsTopics()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('Hiderow action', () => {

    const expectedActions = [
      { type: types.HIDE_ROW, payload: [{points: 2, hide: true}] }
    ];
    const store = mockStore(INITIAL_STATE);

    return store.dispatch(actions.hideRow(1, 0, [{points: 2, hide: false}])).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    });
  });

  it('Upvote action', () => {

    const expectedActions = [
      { type: types.HIDE_ROW, payload: [{points: 3, hide: false}] }
    ];
    const store = mockStore(INITIAL_STATE);

    return store.dispatch(actions.upVote(1, 0, [{points: 2, hide: false}])).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})

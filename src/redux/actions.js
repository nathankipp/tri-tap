import { storage, getFullDate } from '../lib';

const API = 'https://q1yg2vh97k.execute-api.us-east-2.amazonaws.com/live';

const LOAD = 'LOAD';
const RESET = 'RESET';
const SET_ACTIVITY = 'SET_ACTIVITY';
const SET_EFFORT = 'SET_EFFORT';
const SET_TODAY = 'SET_TODAY';
const SET_LIFTS = 'SET_LIFTS';
const SET_PRESSURES = 'SET_PRESSURES';
const SET_EVENTS = 'SET_EVENTS';
const SET_USER = 'SET_USER';
const SET_WORKOUT = 'SET_WORKOUT';
const SET_WORKOUT_COMPLETED = 'SET_WORKOUT_COMPLETED';

export const actionTypes = {
  LOAD,
  RESET,
  SET_ACTIVITY,
  SET_EFFORT,
  SET_TODAY,
  SET_LIFTS,
  SET_PRESSURES,
  SET_EVENTS,
  SET_USER,
  SET_WORKOUT,
  SET_WORKOUT_COMPLETED,
};

const fetchX = (method, url, body) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  return fetch(url, options)
    .then((res) => (res.status === 200 ? res : new Error()))
    .then((response) => response.json());
};

export const getHiitrx = (hash) => (dispatch) =>
  fetchX('GET', `${API}/hiitrx?hash=${hash}`)
    .then((state) => {
      // result of api includes fitnessTests
      if (state) {
        storage.setItem('hash', state.hash);
        dispatch(load(state));
        return Promise.resolve(state.hash);
      }
      storage.removeItem('hash');
      dispatch(reset());
      return Promise.reject();
    })
    .catch(() => Promise.reject());

export const updateHiitrx = () => (_, getState) => {
  const { fitnessTests, ...hiitrx } = getState(); // omit fitnessTests from save
  return fetchX('POST', `${API}/hiitrx`, { ...hiitrx, date: getFullDate() });
};

export const getWorkout = () => (_, getState) => {
  const { hash } = getState();
  return fetchX('GET', `${API}/workout?hash=${hash}`);
};

export const authenticate = ({ email, password }) => (dispatch) =>
  fetchX('POST', `${API}/auth`, { email, password })
    .then(({ hash }) => getHiitrx(hash)(dispatch))
    .catch(Promise.reject);

export const load = (payload) => ({ type: LOAD, payload });

export const reset = () => ({ type: RESET });

export const setActivity = (payload) => ({ type: SET_ACTIVITY, payload });

export const setEffort = (payload) => ({ type: SET_EFFORT, payload });

export const setToday = (payload) => ({ type: SET_TODAY, payload });

export const setLifts = (payload) => ({ type: SET_LIFTS, payload });

export const setPressures = (payload) => ({ type: SET_PRESSURES, payload });

export const setEvents = (payload) => ({ type: SET_EVENTS, payload });

export const setUser = (payload) => ({ type: SET_USER, payload });

export const setWorkout = (payload) => ({ type: SET_WORKOUT, payload });

export const setWorkoutCompleted = (payload) => ({
  type: SET_WORKOUT_COMPLETED,
  payload,
});

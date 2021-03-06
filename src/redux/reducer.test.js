import reducer, { DEFAULT_STATE } from './reducer';
import {
  load,
  reset,
  setActivity,
  setEffort,
  setToday,
  setLifts,
  setPressures,
  setEvents,
  setUser,
  setWorkout,
  setWorkoutCompleted,
} from './actions';

jest.mock('../lib/getFullDate', () => () => '2021-01-01');

describe('hiitrx reducer', () => {
  let INITIAL_STATE;
  beforeEach(() => {
    INITIAL_STATE = {
      hash: 'foo',
      name: 'Foo',
      email: 'foo@email.com',
      age: 50,
      schedule: {
        '2020-12-31': {
          activity: [1, 0, 0],
        },
      },
      events: ['2020-12-31'],
    };
  });

  it('processes load()', () => {
    const action = load({
      foo: 'bar',
    });
    const newState = reducer(INITIAL_STATE, action);
    expect(newState.foo).toBe('bar');
  });

  it('processes reset()', () => {
    const action = reset();
    const newState = reducer(INITIAL_STATE, action);
    expect(newState).toEqual(DEFAULT_STATE);
  });

  it('processes setActivity', () => {
    const action = setActivity({
      date: '2021-01-01',
      activity: [1, 0, 0],
    });
    const newState = reducer(INITIAL_STATE, action);
    expect(newState.schedule['2020-12-31']).toEqual(
      INITIAL_STATE.schedule['2020-12-31']
    );
    expect(newState.schedule).toMatchObject({
      '2021-01-01': {
        activity: [1, 0, 0],
      },
    });
  });

  it('processes setEffort', () => {
    const action = setEffort({
      date: '2021-01-01',
      effort: 7.25,
    });
    const newState = reducer(INITIAL_STATE, action);
    expect(newState.schedule['2020-12-31']).toEqual(
      INITIAL_STATE.schedule['2020-12-31']
    );
    expect(newState.schedule).toMatchObject({
      '2021-01-01': {
        effort: 7.25,
      },
    });
  });

  it('processes setToday', () => {
    const action = setToday({
      motivated: '1.2',
      fast: '3.4',
      sleep: '5.6',
      sleepHours: '7.8',
    });
    const newState = reducer(INITIAL_STATE, action);
    expect(newState.schedule['2020-12-31']).toEqual(
      INITIAL_STATE.schedule['2020-12-31']
    );
    expect(newState.schedule).toMatchObject({
      '2021-01-01': {
        motivated: 1.2,
        fast: 3.4,
        sleep: 5.6,
        sleepHours: 7.8,
      },
    });
  });

  it('processes setLifts', () => {
    const action = setLifts([123, 456, 789]);
    const newState = reducer(INITIAL_STATE, action);
    expect(newState.schedule['2020-12-31']).toEqual(
      INITIAL_STATE.schedule['2020-12-31']
    );
    expect(newState.schedule).toMatchObject({
      '2021-01-01': {
        lifts: [123, 456, 789],
      },
    });
  });

  it('processes setPressures', () => {
    const action = setPressures([-1, 0.1, 0.99]);
    const newState = reducer(INITIAL_STATE, action);
    expect(newState.schedule['2020-12-31']).toEqual(
      INITIAL_STATE.schedule['2020-12-31']
    );
    expect(newState.schedule).toMatchObject({
      '2021-01-01': {
        pressures: [-1, 0.1, 0.99],
      },
    });
  });

  it('processes setEvents', () => {
    const action = setEvents(['2020-01-01', '2020-01-02']);
    const newState = reducer(INITIAL_STATE, action);
    expect(newState.events).toMatchObject(['2020-01-01', '2020-01-02']);
  });

  it('processes setUser', () => {
    const action = setUser({ age: 45, name: 'bar' });
    const newState = reducer(INITIAL_STATE, action);
    expect(newState.age).toBe(45);
    expect(newState.name).toBe('bar');
  });

  it('processes setWorkout', () => {
    const action = setWorkout({ intervals: [1] });
    const newState = reducer(INITIAL_STATE, action);
    expect(newState.schedule['2021-01-01'].workout).toMatchObject({
      intervals: [1],
    });
  });

  it('processes setWorkoutCompleted', () => {
    const setupAction = setWorkout({ intervals: [1] });
    let newState = reducer(INITIAL_STATE, setupAction);
    const action = setWorkoutCompleted(14);
    newState = reducer(newState, action);
    expect(newState.schedule['2021-01-01'].workout.completed).toBe(14);
  });
});

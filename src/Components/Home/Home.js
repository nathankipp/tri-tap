import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faStopwatch, faRunning, faSwimmer, faBiking } from '@fortawesome/free-solid-svg-icons';
import LS from '../../utils/ls';
import SliderScale from '../SliderScale';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const today = new Date().getDay();
const getDay = day => day < 7 ? DAYS[day] : DAYS[day - 7];
const getDayText = plus => !plus
  ? 'Today'
  : plus === 1
    ? 'Tomorrow'
    : getDay(today + plus);

const restMessages = [
  'Rest up!',
  'Enjoy your day off :)',
  'Save some energy',
  'Rest & refuel',
  'Put your feet up',
  'Remember to hydrate',
  'Take a load off',
];
const randomMessage = restMessages[Math.floor(Math.random() * 7)];

const getColor = toggle => toggle ? "has-text-success" : "has-text-grey-light";

const getFullDate = d => {
  const fullDate = [d.getFullYear()];
  const mo = d.getMonth() + 1;
  fullDate.push(mo < 10
    ? `0${mo}`
    : mo
  );
  const dy = d.getDate();
  fullDate.push(d < 10
    ? `0${dy}`
    : dy
  );
  return fullDate.join('-');
}

function Home({ schedule, setSchedule, updateHiitrx, history }) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const dts = [];
    [0,1,2,3,4,5,6].forEach((day) => {
      const date = new Date(Date.now() + 1000 * 60 * 60 * 24 * day);
      dts.push(getFullDate(date));
    });
    setDates(dts);
  }, []);

  const setDaySchedule = date => item => value =>
    setSchedule({ date, [item]: value });

  const saveAndNext = () => updateHiitrx()
    .then(() => {
      const speed = schedule[dates[0]].speed;
      const to = speed
        ? '/results?speed={}'
        : '/lift';
      history.push(to);
    })
    .catch(() => console.warn('update failed'));

  // only show button if there are entries for next # days
  const DAYS_OUT = 4;
  const haveEnoughEntries = !dates
    .slice(0, DAYS_OUT)
    .map((date) => (schedule[date]?.activity || []).includes(1))
    .includes(false);

  const showTodayMessage = (date, idx) =>
    !!schedule[date]?.activity?.[1] && idx === 0;

  const showRestMessage = (date, idx) =>
    !!schedule[date]?.activity?.[0] && idx === 0;

  return (
    <div className="forecast m-4 x">
      <div className="headings columns is-mobile">
        <div className="column has-text-weight-bold is-3 forecast-day">Day</div>
        <div className="column has-text-weight-bold is-3 has-text-centered">Off</div>
        <div className="column has-text-weight-bold is-3 has-text-centered">HIIT</div>
        <div className="column has-text-weight-bold is-3 has-text-centered">Other</div>
      </div>
      {dates.map((date, idx) => {
        const iconColor = key => getColor(!!schedule[date]?.activity?.[key]);
        const setActivity = setDaySchedule(date)('activity');
        const setEffort = debounce(setDaySchedule(date)('effort'), 100);
        return (
          <Fragment key={date}>
            <div className={`columns is-mobile ${idx % 2 ? 'has-background-white-ter' : ''}`}>
              <div className="column has-text-weight-bold is-3 forecast-day">
                {getDayText(idx)}
              </div>
              <div
                className="clickable column is-3 is-flex is-justify-content-center is-align-items-center"
                onClick={() => setActivity([1,0,0])}
              >
                <FontAwesomeIcon className={iconColor(0)} icon={faBed} size="lg" />
              </div>
              <div
                className="clickable column is-3 is-flex is-justify-content-center is-align-items-center"
                onClick={() => setActivity([0,1,0])}
              >
                <FontAwesomeIcon className={iconColor(1)} icon={faStopwatch} size="lg" />
              </div>
              <div
                className="clickable column is-3 is-flex is-justify-content-center is-align-items-center is-relative"
                onClick={() => setActivity([0,0,1])}
              >
                <FontAwesomeIcon className={`mx-1 ${iconColor(2)}`} icon={faSwimmer} size="sm" />
                <FontAwesomeIcon className={`mx-1 ${iconColor(2)}`} icon={faBiking} size="sm" />
                <FontAwesomeIcon className={`mx-1 ${iconColor(2)}`} icon={faRunning} size="sm" />
              </div>
            </div>
            {showTodayMessage(date, idx) && (
              <div className={`columns is-mobile ${idx % 2 ? 'has-background-white-ter' : ''}`}>
                <div className="column is-12 is-flex is-justify-content-center is-align-items-center">
                  {haveEnoughEntries
                    ? (<button
                          className="button is-large mb-3"
                          onClick={saveAndNext}
                        >
                          Today's Workout
                        </button>
                      )
                    : (<div className="py-5 has-text-info">
                        Plan the next {DAYS_OUT} days to get your workout
                      </div>)
                  }
                </div>
              </div>
            )}
            {showRestMessage(date, idx) && (
              <div className="columns">
                <div className="column is-12 has-text-centered">
                  <div className="py-5 has-text-info">{randomMessage}</div>
                </div>
              </div>
            )}
            {!!schedule[date]?.activity?.[2] && (
              <div className={`columns is-mobile ${idx % 2 ? 'has-background-white-ter' : ''}`}>
                <div className="column is-12 is-flex is-align-items-center">
                  <div className="mb-1 mx-4 has-text-centered">Anticipated<br />Effort</div>
                  <div className="is-flex-grow-1 mx-4">
                    <input
                      defaultValue={schedule?.[date]?.effort}
                      className="slider is-warning is-fullwidth is-large mt-2"
                      step=".25"
                      min="0"
                      max="10"
                      type="range"
                      onChange={(e) => setEffort(e.target.value)}
                    />
                    <SliderScale scale={['light', 'moderate', 'hard']} />
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default withRouter(Home);

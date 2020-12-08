import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import TimePicker from './TimePicker';
import SliderScale from './SliderScale';
import LS from './ls';

const getDefaultValue = (field) => {
  if (field === 'date')
    return new Date().toLocaleDateString();
  else
    return LS.getItem(field) || '';
}

const getInput = (type, { field, scale }) => {
  switch (type) {
    case 'slider':
      return (
        <>
          <input
            id={field}
            name={field}
            defaultValue={getDefaultValue(field)}
            className="slider is-warning is-fullwidth is-large mt-2"
            step=".25"
            min="0"
            max="10"
            type="range"/>
          <SliderScale scale={scale} />
        </>
      );
    case 'time':
      const time = getDefaultValue(field);
      let [h, m] = time.split('.');
      h = h || 8;
      m = m || 0;
      return <TimePicker h={Number(h)} m={Number(`.${m}`)*60} />;
    case 'text':
    default:
      return (
        <input
          className="input mb-4"
          id={field}
          name={field}
          defaultValue={getDefaultValue(field)}
          type={type || 'text'}/>
      );
  }
}

export default function Tform({ onSubmit }) {
  const [redirect, setRedirect] = useState(false);

  const submitHandler = (e) => {
    onSubmit(e).then(setRedirect);
  }

  if (redirect) {
    return <Redirect push to="/lift" />;
  }

  const hasUser = LS.isValidUser();
  const items = hasUser
    ? LS.items.map(item =>
        item.field === 'name' || item.field === 'age'
        ? { ...item, type: 'hidden' }
        : item
      )
    : LS.items;

  return (
    <div className="px-4 py-4">
      <div>
        {hasUser
          ? (
            <div className="mb-2 pb-2 is-flex is-justify-content-space-between is-align-items-center">
              <strong>Hello, {LS.getItem('name')}</strong>
              <Link to="/login">
                <button className="button is-small">not {LS.getItem('name')}?</button>
              </Link>
            </div>
          ) : null
        }
        <form onSubmit={submitHandler}>
          {items.map(({ label, field, type, scale }) => {
            return (
              <div key={field} id={`${field}-wrapper`}>
                {type !== 'hidden' && <label htmlFor={field}>{label}</label>}
                {getInput(type, { field, scale })}
              </div>
            );
          })}
          <div className="has-text-centered">
            <input className="button is-black" type="submit" value="Next" />
          </div>
        </form>
      </div>
    </div>
  );
}

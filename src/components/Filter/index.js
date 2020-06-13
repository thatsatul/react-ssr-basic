import React from 'react';

export const Filter = (props) => {
  const { onPreviousClick, onNextClick } = props;
  return(
    <div className="level">
      <div className="level-left">
        <button className="button is-primary is-outlined" onClick={() => onPreviousClick()}>Previous</button>
      </div>
      <div className="level-right">
        <button className="button is-primary is-outlined" onClick={() => onNextClick()}>Next</button>
      </div>
    </div>
  );
}

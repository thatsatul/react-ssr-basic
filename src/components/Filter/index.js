import React from 'react';

export const Filter = (props) => {
  const { onPreviousClick, onNextClick, page } = props;
  return(
    <div className="level is-mobile filter-row">
      <div className="level-left">
        <button className="button is-primary is-outlined" onClick={() => onPreviousClick()}>Previous</button>
      </div>
      <div className="level-item has-text-centered">
        PAGE - {page}
      </div>
      <div className="level-right">
        <button className="button is-primary is-outlined" onClick={() => onNextClick()}>Next</button>
      </div>
    </div>
  );
}

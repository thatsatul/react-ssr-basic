import React from 'react';

export const Filter = (props) => {
  const { onPreviousClick, onNextClick, page } = props;
  return(
    <div className="level is-mobile filter-row">
      <div className="level-left">
        <button className="button is-primary is-outlined" onClick={() => onPreviousClick()} aria-label="Previous">Previous</button>
      </div>
      <div className="level-item has-text-centered">
        PAGE - {page}
      </div>
      <div className="level-right">
        <button className="button is-primary is-outlined" onClick={() => onNextClick()} aria-label="Next">Next</button>
      </div>
    </div>
  );
}

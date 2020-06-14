import React from 'react';

export const NewsRow = (props) => {
  const { row, index } = props;
  return(
    <div className="columns is-multiline">
      <div className="column is-full">{row.title}</div>
      <div className="column">
        <div className="level">
          <div className="level-left">{row.author}</div>
          <div className="level-right" data-num={index}>{row.points}</div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export const NewsRow = (props) => {
  const { row, index } = props;
  return(
    <div className="news-row">
      <div className="columns is-hidden-tablet is-multiline">
        <div className="column is-full news-rw">
          <div className="level is-mobile">
            <div className="level-item has-text-centered mb-item mb-comment">
              {row.num_comments} <span style={{fontSize: 14}}>&nbsp;Comments</span>
            </div>
            <div className="level-item has-text-centered mb-item mb-author">{row.author}</div>
            <div className="level-item has-text-centered mb-item mb-vote">
              <span data-num={index}>{row.points}</span>
              <img src="../../../static/img/upvote.png" className="upvote-icon" data-num={index} alt="upvote" />
            </div>
            <div className="level-item has-text-centered mb-item mb-hide">
              <img src="../../../static/img/hide.png" className="hide-icon" data-num={index} data-hide={1} alt="hide"/>
            </div>
          </div>
        </div>
        <div className="column is-full mb-row">{row.title}</div>
      </div>
      <div className="columns is-hidden-touch">
        <div className="column is-2 ds-row">{row.num_comments}</div>
        <div className="column is-2 ds-row">{row.author}</div>
        <div className="column is-1 ds-row mb-vote" data-num={index}>
          <span>{row.points}</span>
          <img src="../../../static/img/upvote.png" className="upvote-icon" data-num={index} alt="upvote"/>
        </div>
        <div className="column is-1 ds-row mb-vote" data-num={index} data-hide={1}>
          <img src="../../../static/img/hide.png" className="hide-icon" data-num={index} data-hide={1} alt="hide"/>
        </div>
        <div className="column ds-row ds-row-title">{row.title}</div>
      </div>
    </div>
  );
}

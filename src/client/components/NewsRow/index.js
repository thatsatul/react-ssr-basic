import React from 'react';

export const NewsRow = (props) => {
  const { row, index } = props;
  return(
    <div className="news-row">
      <div className="columns is-hidden-tablet is-multiline">
        <div className="column is-full news-rw">
          <div className="level is-mobile">
            <div className="level-item has-text-centered mb-item mb-comment" aria-details="comments">
              {row.num_comments} <span style={{fontSize: 14}}>&nbsp;Cts</span>
            </div>
            <div className="level-item has-text-centered mb-item mb-author" aria-details="author">{row.author}</div>
            <div className="level-item has-text-centered mb-item mb-vote" aria-details="upvotes">
              <span data-num={index}>{row.points}</span>
              <a role="tab" tabIndex={0}>
                <img src="../../../static/img/upvote.png" className="upvote-icon" data-num={index} alt="upvote" />
              </a>
            </div>
            <div className="level-item has-text-centered mb-item mb-hide" aria-label="Hide">
              <a role="tab" tabIndex={0}>
                <img src="../../../static/img/hide.png" className="hide-icon" data-num={index} data-hide={1} alt="hide" />
              </a>
            </div>
          </div>
        </div>
        <div className="column is-full mb-row" aria-details="title">{row.title}</div>
      </div>
      <div className="columns is-hidden-touch">
        <div className="column is-2 ds-row" aria-details="comments">{row.num_comments}</div>
        <div className="column is-2 ds-row" aria-details="author">{row.author}</div>
        <div className="column is-1 ds-row mb-vote" data-num={index} aria-details="upvotes">
          <span>{row.points}</span>
          <a role="tab" tabIndex={0} data-num={index}>
            <img src="../../../static/img/upvote.png" className="upvote-icon" alt="upvote"/>
          </a>
        </div>
        <div className="column is-1 ds-row mb-vote" data-num={index} data-hide={1} aria-label="Hide">
          <a role="tab" tabIndex={0} data-num={index} data-hide={1}>
            <img src="../../../static/img/hide.png" className="hide-icon" alt="hide" />
          </a>
        </div>
        <div className="column ds-row ds-row-title" aria-details="title">{row.title}</div>
      </div>
    </div>
  );
}

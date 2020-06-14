import React from 'react';

export const NewsRow = (props) => {
  const { row, index } = props;
  return(
    <div className="news-row">
      <div className="columns is-hidden-tablet is-multiline">
        <div className="column is-full news-rw">
          <div className="level is-mobile">
            <div className="level-item has-text-centered mb-item mb-comment">{row.num_comments}</div>
            <div className="level-item has-text-centered mb-item mb-author">{row.author}</div>
            <div className="level-item has-text-centered mb-item mb-vote">
              <span data-num={index}>{row.points}</span>
              <img src="../../../static/img/upvote.png" style={{height: 20, width: 20, display: 'inline', marginLeft: 3}} data-num={index}/>
            </div>
            <div className="level-item has-text-centered mb-item">
              <img src="../../../static/img/hide.png" style={{height: 20, width: 20, display: 'inline'}} data-num={index} data-hide={1}/>
            </div>
          </div>
        </div>
        <div className="column is-full mb-row">{row.title}</div>
      </div>
      <div className="columns is-hidden-touch">
        <div className="column is-1 ds-row">{row.num_comments}</div>
        <div className="column is-2 ds-row">{row.author}</div>
        <div className="column is-1 ds-row" data-num={index}>
          <span>{row.points}</span>
          <img src="../../../static/img/upvote.png" style={{height: 20, width: 20, display: 'inline', marginLeft: 3}} data-num={index}/>
        </div>
        <div className="column is-1 ds-row" data-num={index} data-hide={1}>
          <img src="../../../static/img/hide.png" style={{height: 20, width: 20, display: 'inline'}} data-num={index} data-hide={1}/>
        </div>
        <div className="column ds-row ds-row-title">{row.title}</div>
      </div>
    </div>
  );
}

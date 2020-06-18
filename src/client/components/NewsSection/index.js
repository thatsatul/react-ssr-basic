import React from 'react';
import { NewsRow } from '../NewsRow';

const newsSection = (props) => {
  const { data, onRowClick } = props;
  return (
    <div>
      <div className="columns is-hidden-touch news-topic-header">
        <div className="column is-2 ds-row-header">Comments</div>
        <div className="column is-2 ds-row-header">Author</div>
        <div className="column is-1 ds-row-header">Upvotes</div>
        <div className="column is-1 ds-row-header"></div>
        <div className="column">Topic</div>
      </div>
      <ul onClick={(e) => onRowClick(e)}>
        {data.map((row, index) => row.title && !row.hide ? <li key={row.objectID}><NewsRow row={row} index={index} /></li> : null)}
      </ul>
    </div>
  );
}

export default newsSection;

import React from 'react';
import { NewsRow } from '../NewsRow';

const newsSection = (props) => {
  const { data, onRowClick } = props;
  return (
    <ul onClick={(e) => onRowClick(e)}>
      {data.map((row, index) => row.title && !row.hide ? <li key={row.objectID}><NewsRow row={row} index={index} /></li> : null)}
    </ul>
  );
}

export default newsSection;

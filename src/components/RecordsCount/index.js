import React from 'react';

const recordsCount = (props) =>  (
  <div style={{textAlign: 'center', fontSize: 19, fontWeight: '500', marginBottom: 12}}>Total number of records: {props.data.length}</div>
);

export default recordsCount;

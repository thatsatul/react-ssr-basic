import React, {Component} from 'react';
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries,
  Hint,
  FlexibleWidthXYPlot
} from 'react-vis';

import '../../../node_modules//react-vis/dist/style.css';

// var LineChart = reactD3Components.LineChart;

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverValue: null,
      data: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { data } = props;
    const finalData = [];
    data.forEach(row => {
      finalData.push({y: row.points, x: row.objectID})
    });
    return {...state, data: finalData};
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="columns">
        <div className="column">
          <h3 className="has-text-centered chart-lb">Upvote Vs Author Id</h3>
          <div className="chartComp" style={{padding: 20}}>
            <FlexibleWidthXYPlot height={300} xType="ordinal" style={{marginBottom: 50, marginRight: -10}}>
              {/* <VerticalGridLines />
              <HorizontalGridLines /> */}
              <XAxis
                  title="Author Id"
                  tickLabelAngle={-90}
                  style={{
                    line: {stroke: '#ADDDE1'},
                    ticks: {stroke: '#ADDDE1'},
                    text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                  }}
                />
              <YAxis title="Upvotes" style={{title: {fontSize: '16px'}}}/>
              <HorizontalGridLines />
              <VerticalGridLines />
              <LineMarkSeries
                data={this.state.data}
                lineStyle={{stroke:"orange"}}
                markStyle={{stroke:"lightblue"}}
                onNearestX={(value) => this.setState({ hoverValue: value })}
                onMouseOut={()=>{
                  this.setState({ hoverValue: null })
                }}
              />
              {this.state.hoverValue
                ? (
                  <Hint value={this.state.hoverValue}>
                    <div style={{color: '#115421', fontSize: 12}}>
                      <div>Upvotes: {this.state.hoverValue.y}</div>
                      <div>AuthorId: {this.state.hoverValue.x}</div>
                    </div>
                  </Hint>
                )
                : null
              }
            </FlexibleWidthXYPlot>
          </div>
        </div>
      </div>
    );
  }
}

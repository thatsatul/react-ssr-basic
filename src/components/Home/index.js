import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewsTopics } from "../../action/news";
import { Loading } from '../../common';

const mapStateToProps = ({ news }) => ({ news });

@connect(mapStateToProps, { fetchNewsTopics })
export default class Home extends Component {

  componentDidMount() {
    this.props.fetchNewsTopics();
  }


  render() {
    const { news: { isFetching, data } } = this.props;

    if(isFetching) {
      return <Loading />;
    }

    if(!data || data.length <= 0) {
      return <div>No Data</div>;
    }

    return(
      <div className="container">
        <ul>
          {data.map(row => <li>{JSON.stringify(row)}</li>)}
        </ul>
      </div>
    );
  }
};

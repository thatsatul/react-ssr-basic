import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewsTopics } from "../../action/news";
import { Loading } from '../../common';

const mapStateToProps = ({ news }) => ({ news });

@connect(mapStateToProps, { fetchNewsTopics })
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { page } = state;
    const { match, fetchNewsTopics } = props;
    if(page != match.params.pageNum) {
      fetchNewsTopics(match.params.pageNum);
    }
    return {
      page: match.params.pageNum
    };
  }

  onNextClick() {
    const { match, history } = this.props;
    const nextPage = parseInt(match.params.pageNum) + 1;
    console.log('Next Clicked', match, history);
    history.push('/page/'+nextPage);
  }

  onPreviousClick() {
    console.log('Previous Clicked');
    const { match, history } = this.props;
    const prevPage = parseInt(match.params.pageNum) - 1;
    if(prevPage > 0) {
      console.log('Next Clicked', match, history);
      history.push('/page/'+prevPage);
    }
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
        <div>
          <button onClick={() => this.onPreviousClick()}>Previous</button>
          <button onClick={() => this.onNextClick()}>Next</button>
        </div>
        <ul>
          {data.map(row => <li>{JSON.stringify(row)}</li>)}
        </ul>
      </div>
    );
  }
};

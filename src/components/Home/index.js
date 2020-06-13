import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewsTopics, upVote } from "../../action/news";
import { Loading } from '../../common';
import { Filter } from '../Filter';
import { NewsRow } from '../NewsRow';

const mapStateToProps = ({ news }) => ({ news });

@connect(mapStateToProps, { fetchNewsTopics, upVote })
export default class Home extends Component {
  constructor() {
    super();
    this.onNextClick = this.onNextClick.bind(this);
    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onUpvoteClick = this.onUpvoteClick.bind(this);
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

  onUpvoteClick(e) {
    console.log(e, e.currenTarget, e.target, e.target.getAttribute("data-num"));
    e.preventDefault();
    const index = parseInt(e.target.getAttribute("data-num"));
    const { news: { data }, upVote } = this.props;
    const { page } = this.state;
    upVote(page, index, data);
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
        <Filter onPreviousClick={this.onPreviousClick} onNextClick={this.onNextClick} />
        {/* Event delegation */}
        <ul onClick={(e) => this.onUpvoteClick(e)}>
          {data.filter(row => row.title).map((row, index) => <li key={row.objectID}><NewsRow row={row} index={index} /></li>)}
        </ul>
      </div>
    );
  }
};

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewsTopics, upVote, hideRow } from "../../action/news";
import { Loading } from '../../common';
import { Filter } from '../../components/Filter';
import NewsSection from '../../components/NewsSection';
import LChart from '../../components/Chart';
import Header from '../../components/Header';
import RecordsCount from '../../components/RecordsCount';
import ErrorComp from '../../components/PageError';
import NoData from '../../components/Nodata';


const mapStateToProps = ({ news }) => ({ news });

@connect(mapStateToProps, { fetchNewsTopics, upVote, hideRow })
export default class Home extends Component {
  constructor() {
    super();
    this.onNextClick = this.onNextClick.bind(this);
    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
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
    history.push('/page/'+nextPage);
  }

  onPreviousClick() {
    const { match, history } = this.props;
    const prevPage = parseInt(match.params.pageNum) - 1;
    if(prevPage > 0) {
      history.push('/page/'+prevPage);
    }
  }

  onRowClick(e) {
    e.preventDefault();
    const { news: { data }, upVote, hideRow } = this.props;
    const { page } = this.state;
    const index = parseInt(e.target.getAttribute("data-num"));
    const hide = parseInt(e.target.getAttribute("data-hide"));
    if(hide && index >= 0) {
      hideRow(page, index, data);
    } else if(index >= 0) {
      upVote(page, index, data);
    }
  }

  render() {
    const { news: { isFetching, data, isError } } = this.props;
    const { page } = this.state;

    if(isError) {
      return <ErrorComp />;
    }

    if(isFetching) {
      return <Loading />;
    }

    if(!data || data.length <= 0) {
      return <NoData />;
    }

    const finalData = data.filter(row => row.title && !row.hide);
    return(
      <div className="container">
        <Header />
        <Filter onPreviousClick={this.onPreviousClick} onNextClick={this.onNextClick} page={page} />
        {/* Event delegation */}
        <RecordsCount data={finalData} />
        <NewsSection data={data} onRowClick={this.onRowClick} />
        <LChart data={data} />
      </div>
    );
  }
}

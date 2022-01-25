import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    articles = []

    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            articles: parseData.articles,
            totalArticles: parseData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews()
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalArticles: parseData.totalResults,
        })
    };

    render() {
        return (
            <div className='container'>
                <h4 className='my-4' >{`Top HeadLines - ${this.props.category}`}</h4>
                { !this.state.loading && <Spinner/> }
                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner />} >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map(e => {
                                return (
                                    <div className="col-md-4 my-1" key={e.source.name.split(' ')[0] + e.title ? e.title.split(' ')[0] : ''} >
                                        <NewsItem title={e.title ? e.title.slice(0, 20) : ""} description={e.description ? e.description.slice(0, 100) : ""} imgUrl={e.urlToImage} time={'Published on : ' + new Date(e.publishedAt).toGMTString()} author={e.author ? e.author : 'Unknown'} newsUrl={e.url} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}

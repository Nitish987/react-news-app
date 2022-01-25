import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, time, author, newsUrl } = this.props
        return (
            <div>
                <div className="card">
                <p className="card-text pt-3 px-3">{author}</p>
                    <img src={imgUrl} className="card-img-top" alt="news_img" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="text-muted">{time}</p>
                            <a href={newsUrl} className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        );
    }
}

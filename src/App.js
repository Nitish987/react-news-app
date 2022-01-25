import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {

    API_KEY = process.env.API_KEY

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<News key={'general'} pageSize={3} apiKey={this.API_KEY} country={'in'} category={'general'} />} />
                        <Route exact path="/business" element={<News key={'business'} pageSize={3} apiKey={this.API_KEY} country={'in'} category={'business'} />} />
                        <Route exact path="/entertainment" element={<News key={'entertainment'} pageSize={3} apiKey={this.API_KEY} country={'in'} category={'entertainment'} />} />
                        <Route exact path="/health" element={<News key={'health'} pageSize={3} apiKey={this.API_KEY} country={'in'} category={'health'} />} />
                        <Route exact path="/science" element={<News key={'science'} pageSize={3} apiKey={this.API_KEY} country={'in'} category={'science'} />} />
                        <Route exact path="/sports" element={<News key={'sports'} pageSize={3} apiKey={this.API_KEY} country={'in'} category={'sports'} />} />
                        <Route exact path="/technology" element={<News key={'technology'} pageSize={3} apiKey={this.API_KEY} country={'in'} category={'technology'} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}



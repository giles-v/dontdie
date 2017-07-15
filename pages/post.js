import Head from 'next/head';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import logger from 'redux-logger';

import { fetchPosts } from '../actions/wp-api';
import reducers from '../reducers';
import { Header, PostList } from '../components'
import { promiseMiddleware } from '../middleware';

console.log("index file");

const store = createStore(
  reducers,
  applyMiddleware(logger),
  applyMiddleware(promiseMiddleware)
);

export default class extends React.Component {

  static async getInitialProps({ req }) {
    console.log("PostPage.getInitialProps");
    return await fetchPost();
  }

  render () {
    return (
      <Provider store={store}>
        <div className="page">
          <Header />
          <h1>
            Don't Die
          </h1>
          <PostList userAgent={this.props.userAgent} />
        </div>
      </Provider>
    );
  }
}

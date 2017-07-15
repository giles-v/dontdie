import React from 'react';
import { connect } from 'react-redux';

import Head from 'next/head';

export class PostList extends React.Component {

  componentWillMount() {
    console.log("PostList.componentWillMount");
  }

  render() {
    console.log("PostList.render");
    const { posts } = this.props;

    return (
      <div>
        <style jsx>{`
          .post-list {
            display: flex;
          }
          h2 {
            display: none;
          }
          article {
            flex: 0 0 25%;
          }
          .no-posts {
            text-align: center;
          }
        `}</style>
        <h2>Posts ({this.props.userAgent})</h2>
        <div className="post-list">
        {posts ?
          posts.map((post) => (
            <article key={post.id}>
              <a href={'/' + post.slug}>
                <h3>{post.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </a>
            </article>
          )) : (
            <div class="no-posts">
              No posts found.
            </div>
          )
        }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default PostList; // connect(mapStateToProps, { fetchPosts })(PostList);

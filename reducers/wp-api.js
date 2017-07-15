import {
  FETCH_PAGE,
  FETCH_POSTS
} from '../actions/wp-api';

const defaultState = {
  posts: {
    posts: [],
    pageNum: 1,
    totalPages: 1
  },
  pages: {
    defaultPage: {
      content: {
        rendered: ''
      },
      title: {
        rendered: ''
      }
    }
  }
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_PAGE:
      const { data } = action.payload;

      return Object.assign({}, state, {
        pages: 'foo'
      });

    case FETCH_POSTS:
      const { posts } = action.payload.data.data;

      return Object.assign({}, state, {
        posts
      });

    default:
      return state;
  }
}

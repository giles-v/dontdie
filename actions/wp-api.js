import axios from 'axios';

const api = axios.create({});
api.interceptors.request.use(request => {
  console.log('Starting Request', request.url);
  return request;
});
api.interceptors.response.use(response => {
  console.log('Response:', response.headers.link);
  return response;
})

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_PAGE = 'FETCH_PAGE';

export const API_BASE_URL = 'http://localhost/wordpress';
export const API_POSTS_ENDPOINT = `${API_BASE_URL}/wp-json/wp/v2/posts`;
export const API_PAGES_ENDPOINT = `${API_BASE_URL}/wp-json/wp/v2/pages`;

export function fetchPosts() {
  console.log("wpApi::fetchPosts");
  return {
    type: FETCH_POSTS,
    payload: api.get(API_POSTS_ENDPOINT)
  };
}

export function fetchPage(id) {
  console.log("wpApi::fetchPage", id);
  return {
    type: FETCH_PAGE,
    payload: api.get(`${API_PAGES_ENDPOINT}/pages?filter[name]=${pageName}`)
  };
}

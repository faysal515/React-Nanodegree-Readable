import axios from 'axios'
import {API_URL} from './constants'


export function getPosts() {
  return function (dispatch) {
    return axios.get(`${API_URL}posts/`)
      .then(result => {
        dispatch({type:'GET_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};

export function getPostsById(id) {
  return function (dispatch) {
    return axios.get(`${API_URL}posts/${id}/`)
      .then(result => {
        dispatch({type:'GET_SINGLE_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};

export function getPostsByCategory(category) {
  return function (dispatch) {
    return axios.get(`${API_URL}${category}/posts/`)
      .then(result => {
        dispatch({type:'GET_POST_BY_CATEGORY_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};


export function createPost(data) {
  return function (dispatch) {

    /*
    PARAMS:
      id - UUID should be fine, but any unique id will work
      timestamp - timestamp in whatever format you like, you can use Date.now() if you like
      title - String
      body - String
      author - String
      category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
    */
    return axios.post(`${API_URL}posts/`, data)
      .then(result => {
        dispatch({type:'CREATE_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};


export function votePost(postId,vote) {
  const data = {
    option: vote
  }
  return function (dispatch) {
    return axios.post(`${API_URL}posts/${postId}/`,data)
      .then(result => {
        dispatch({type:'VOTE_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};

export function editPost(postId,data) {

  /*
  PARAMS:
    title - String
    body - String
  */
  return function (dispatch) {
    return axios.put(`${API_URL}posts/${postId}/`,data)
      .then(result => {
        dispatch({type:'EDIT_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};

export function deletePost(postId) {
  // @todo Sets the parentDeleted flag for all child comments to 'true'. EKHANE KAJ BAKI ACHE
  return function (dispatch) {
    return axios.delete(`${API_URL}posts/${postId}/`)
      .then(result => {
        dispatch({type:'EDIT_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};

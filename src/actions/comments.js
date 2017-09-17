import axios from 'axios'
import {API_URL} from './constants'


export function getCommentsOfPost(postId) {
  return function (dispatch) {
    return axios.get(`${API_URL}posts/${postId}/comments/`)
      .then(result => {
        dispatch({type:'GET_POST_COMMENTS_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};

export function getCommentById(id) {
  return function (dispatch) {
    return axios.get(`${API_URL}comments/${id}/`)
      .then(result => {
        dispatch({type:'GET_SINGLE_COMMENT_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};

/*export function getPostsByCategory(category) {
  return function (dispatch) {
    return axios.get(`${API_URL}${category}/posts/`)
      .then(result => {
        dispatch({type:'GET_POST_BY_CATEGORY_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*!/
      })

  }
};*/


export function createComment(data) {
  return function (dispatch) {

    /*
     PARAMS:
     id: Any unique ID. As with posts, UUID is probably the best here.
     timestamp: timestamp. Get this however you want.
     body: String
     author: String
     parentId: Should match a post id in the database.
     */
    return axios.post(`${API_URL}comments/`, data)
      .then(result => {
        dispatch({type:'CREATE_COMMENT_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};


export function voteComment(commentId,vote) {
  const data = {
    option: vote
  }
  return function (dispatch) {
    return axios.post(`${API_URL}comments/${commentId}/`,data)
      .then(result => {
        dispatch({type:'VOTE_COMMENT_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};

export function editComment(commentId,data) {

  /*
   PARAMS:
   timestamp: timestamp. Get this however you want.
   body: String
   */
  return function (dispatch) {
    return axios.put(`${API_URL}comments/${commentId}/`,data)
      .then(result => {
        dispatch({type:'EDIT_COMMENT_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};

export function deleteComment(commentId) {
  // @todo Sets the parentDeleted flag for all child comments to 'true'. EKHANE KAJ BAKI ACHE
  return function (dispatch) {
    return axios.delete(`${API_URL}comments/${commentId}/`)
      .then(result => {
        dispatch({type:'DELETE_COMMENT_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
        return e.response.data // what if e.response if undefined?*/
      })

  }
};

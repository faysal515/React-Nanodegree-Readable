import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export function getPosts(email, pass) {
  return function (dispatch) {
    return axios.get(`${API_URL}posts/`)
      .then(result => {
        dispatch({type:'GET_POST_RESOLVED', payload: result.data});
        return result.data
      })
      .catch(e => {
        console.log('***', e.response)
      })
  }
};
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const categoryListDispatch = data => {
  return {type:'GET_CATEGORY_RESOLVED', payload: data}
}


export function getCategories(email, pass) {
  return function (dispatch) {
    return axios.get(`${API_URL}categories/`)
      .then(result => {
        dispatch(categoryListDispatch(result.data.categories));
        console.log('login info', result.data.categories)
        /*localStorage.setItem('token', result.data.token)
        axios.defaults.headers.common['authorization'] = `JWT ${result.data.token}` // hotfix
        return result.data.token*/
      })
      .catch(e => {
        console.log('***', e.response)
        throw new Error(e)
        /*console.log('***', e.response.data)
        dispatch({type:'LOGIN_REJECTED',payload:e.response.data})
        return e.response.data // what if e.response if undefined?*/
      })

  }
};
const post = (state = {currentSort: 'maximum'}, action) => {
  let root, subRoot, index, list, valid;


  switch (action.type) {
    case 'GET_POST_RESOLVED':
      valid = action.payload.filter(f => !f.deleted)
      return {
        ...state,
        list: valid,
        sorted: valid.sort((a, b) => b.voteScore - a.voteScore)
      };

    case 'GET_SINGLE_POST_RESOLVED':
      return {
        ...state,
        post: action.payload
      }
    case 'CREATE_COMMENT_RESOLVED':
      let {comments} = state
      comments[state.post.id].push(action.payload)
      comments[state.post.id].sort((a, b) => b.voteScore - a.voteScore)
      return {
        ...state,
        comments: comments

      }
    case 'GET_POST_COMMENTS_RESOLVED':
      comments = {...state.comments} || {}
      comments[action.payload.parentId] = action.payload.data.sort((a, b) => b.voteScore - a.voteScore)
      return {...state, comments}

    case 'VOTE_POST_RESOLVED':

      list = state.list || []
      let postIndex = list.findIndex(t => t.id === action.payload.id)
      if (postIndex > -1) {
        list[postIndex] = action.payload
        return {...state, list, post: action.payload, sorted: sortBySomething([...list], state.currentSort)}
      }
      return {
        ...state,
        post: action.payload
      }

    case 'VOTE_COMMENT_RESOLVED':
      root = {...state.comments}
      subRoot = root[action.payload.parentId]
      index = subRoot.findIndex(x => x.id === action.payload.id)

      subRoot[index] = action.payload
      subRoot.sort((a, b) => b.voteScore - a.voteScore)
      root[action.payload.parentId] = subRoot
      return {...state, comments: root}

    case 'EDIT_COMMENT_RESOLVED':
      root = {...state.comments}
      subRoot = root[action.payload.parentId]
      index = subRoot.findIndex(c => c.id === action.payload.id)

      subRoot[index] = action.payload
      root[action.payload.parentId] = subRoot
      return {...state, comments: root}

    case 'DELETE_COMMENT_RESOLVED':
      root = {...state.comments}
      subRoot = root[action.payload.parentId]
      index = subRoot.findIndex(c => c.id === action.payload.id)

      subRoot.splice(index, 1)

      root[action.payload.parentId] = subRoot
      return {...state, comments: root}

    case 'DELETE_POST_RESOLVED':
      let refined = [...state.list]
      let deletedPostIndex = refined.findIndex(p => p.id === action.payload)
      refined.splice(deletedPostIndex, 1)
      return {
        ...state,
        post: null,
        list: refined,
        sorted: sortBySomething([...refined], state.currentSort)
      }

    case 'CLEAR_POST':
      return {...state, post: null}

    case 'SORT_BY_SOMETHING':
      return {...state, currentSort: action.payload, sorted: sortBySomething(state.list, action.payload)}
    default:
      return state;
  }
};

export default post;


const sortBySomething = (data, method) => {
  if (method === 'maximum')
    return data.sort((a, b) => b.voteScore - a.voteScore)
  else if (method === 'minimum')
    return data.sort((a, b) => a.voteScore - b.voteScore)
  else if (method === 'oldest')
    return data.sort((a, b) => a.timestamp - b.timestamp)
  else if (method === 'newest')
    return data.sort((a, b) => b.timestamp - a.timestamp)
  else return data
}
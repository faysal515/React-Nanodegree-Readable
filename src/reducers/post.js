const post = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POST_RESOLVED':
      return {
        ...state,
        list: action.payload,
        sorted: action.payload.sort((a,b) => b.voteScore-a.voteScore)
      };

    case 'GET_SINGLE_POST_RESOLVED':
      return {
        ...state,
        post: action.payload
      }
    case 'GET_POST_COMMENTS_RESOLVED':
      return {
        ...state,
        comments: {
          [state.post.id || 'unknown']: action.payload
        }
      }
    case 'SORT_BY_SOMETHING':
      if(action.payload === 'maximum')
        return {...state, sorted: state.list((a,b) => b.voteScore-a.voteScore)};
      else if (action.payload === 'minimum')
        return {...state, sorted: state.list.sort((a,b) => a.voteScore-b.voteScore)};
      else if(action.payload === 'oldest')
        return {...state, sorted: state.list.sort((a,b) => b.timestamp-a.timestamp)};
      else if(action.payload === 'newest')
        return {...state, sorted: state.list.sort((a,b) => a.timestamp-b.timestamp)};
      else return state
    default:
      return state;
  }
};

export default post;
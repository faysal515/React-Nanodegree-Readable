const post = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POST_RESOLVED':
      return {
        ...state,
        list: action.payload,
        sorted: action.payload.sort((a,b) => a.voteScore-b.voteScore)
      };
    case 'SORT_BY_VOTE':
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};

export default post;
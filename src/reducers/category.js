const category = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_RESOLVED':
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};

export default category;
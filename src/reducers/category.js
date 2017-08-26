const category = (state = {}, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        isWorking: true
      };
    default:
      return state;
  }
};

export default category;
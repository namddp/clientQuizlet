const initialState = {
    class: null,
};
    
const  classReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CLASS':
        return {
          ...state,
          class: action.payload,
        };
      default:
        return state;
    }
};
    
export default classReducer;
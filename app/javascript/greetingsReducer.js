// Actions
const GET_GREETING = 'rails-react/GET_GREETINGS';

// Action creators
export const getGreetings = () => async(dispatch) => {
  let greeting = {};

  const response = await fetch('http://localhost:3000/greetings')
  greeting = await response.json();

  dispatch({
    type: GET_GREETING,
    payload: greeting,
  });
};

// Reducer
const initialState = {};
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_GREETING:
      return action.payload;
      default:
        return state;
  }
}

export default reducer;
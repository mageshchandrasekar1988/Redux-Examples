const initalState = {
  b: 1
};
const ReducerB = (state = initalState, action) => {
  if (action.type === "UPDATE_B") {
    return {
      ...state,
      b: state.b + action.value
    };
  }
  return state;
};

export default ReducerB;

const initalState = {
  a: 1
};
const ReducerA = (state = initalState, action) => {
  if (action.type === "UPDATE_A") {
    return {
      ...state,
      a: state.a + action.value
    };
  }
  return state;
};

export default ReducerA;

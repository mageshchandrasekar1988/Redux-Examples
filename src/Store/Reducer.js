const initalState = {
  age: 31,
  username: "Hithu",
  history: []
};
const reducer = (state = initalState, action) => {
  const newState = { ...state };
  if (action.type === "AGE_UP") {
    //newState.age++;
    return {
      ...state,
      age: state.age + action.value,
      history: state.history.concat({
        id: Math.random(),
        age: state.age + action.value
      })
    };
  }
  if (action.type === "AGE_DOWN") {
    return {
      ...state,
      age: state.age - action.value,
      history: state.history.concat({
        id: Math.random(),
        age: state.age - action.value
      })
    };
  }
  if (action.type === "SHOW_USER_NAME") {
    newState.username = newState.username + "Magesh";
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      history: state.history.filter(item => item.id !== action.key)
    };
  }
  return newState;
};

export default reducer;

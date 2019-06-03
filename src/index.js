import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReduxExample from "./Components/ReduxExample";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import ReducerEx1 from "./Store/ReducerEx1";
import ReducerA from "./Store/ReducerA";
import ReducerB from "./Store/ReducerB";
import reducer from "./Store/Reducer";

const rootReducer = combineReducers({
  rA: ReducerA,
  rB: ReducerB,
  rEx1: reducer
});
const store = createStore(rootReducer); /*Creating Store */

ReactDOM.render(
  <Provider store={store}>
    <ReduxExample />
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

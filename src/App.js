import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Age: <span>{this.props.age}</span>
        </div>
        {this.props.username}
        <button onClick={this.props.onHandelIncrement}>Increment</button>
        <button onClick={this.props.onHandelDecrement}>Decrement</button>
        <button onClick={this.props.onHandelShowUserName}>Show Name</button>
        <hr />
        <div>History</div>
        <div>
          <ul>
            {this.props.history.map(item => (
              <li
                className="history"
                key={item.id}
                onClick={() => this.props.onHandelRemove(item.id)}
              >
                {item.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    age: state.rEx1.age,
    username: state.rEx1.username,
    history: state.rEx1.history
  };
};
const mapDispachToProps = dispach => {
  return {
    onHandelIncrement: () => dispach({ type: "AGE_UP", value: 1 }),
    onHandelDecrement: () => dispach({ type: "AGE_DOWN", value: 1 }),
    onHandelShowUserName: () => dispach({ type: "SHOW_USER_NAME" }),
    onHandelRemove: id => dispach({ type: "REMOVE", key: id })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);

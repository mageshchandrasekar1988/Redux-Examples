import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
class ReduxExample extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <span>A:</span>
            <span>{this.props.a}</span>
          </div>
          <div>
            <button onClick={() => this.props.updateA(this.props.b)}>
              Update A
            </button>
          </div>
        </div>
        <div className="col">
          <div>
            <span>B:</span>
            <span>{this.props.b}</span>
          </div>
          <div>
            <button onClick={() => this.props.updateB(this.props.a)}>
              Update B
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    a: state.rA.a,
    b: state.rB.b
  };
};
const mapDispachToProps = dispach => {
  return {
    updateA: b => dispach({ type: "UPDATE_A", value: b }),
    updateB: a => dispach({ type: "UPDATE_B", value: a })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(ReduxExample);

import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-3"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter} //this counter object have all the detailedd information about the counter
            // value={counter.value}
            // id={counter.id}
            // selescted= {counter.selected}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

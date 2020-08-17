import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
   const{onReset, counters, onDelete,onIncrement}
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-3"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
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

import React, { Component } from "react"; //imrc- import react component
//cc-create class

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter-Unmount");
  }

  //   state = {
  //     value: this.props.counter.value,
  //   };
  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  // style = {
  //   fontSize: 10,
  //   fontWeight: "bold",
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    // console.log(this.props);
    // let classes = this.getBadgeClasses();
    return (
      <div>
        {/* <span style={this.style} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>  */}
        {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}
        {/* {Rendering classes dynamically } */}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          // onClick={() => this.handleIncrement({ id: 1 })}
          // className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

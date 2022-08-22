import React, { Component } from 'react';
class Counter extends React.Component {
    state = {
        count: 0,
    };
        

    increment = () => {
        //this.state.count++;
        // this.setState({ count: this.state.count + 1});
        // this.setState({ count: this.state.count + 5});
        // this.setState({ count: this.state.count + 10});
        // this.setState({ count: this.state.count + 10});// we get increment from 10
                                                          // because last has high prority
        this.setState((state, props) =>({count: state.count + 1}))
        this.setState((state, props) =>({count: state.count + 1}))
        this.setState((state, props) =>({count: state.count + 1}))
        this.setState((state, props) =>({count: state.count + 1}))//we can increment from 26
        console.log("Count: ", this.state.count);
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1});
        //this.state.count--;
        console.log("Count: ", this.state.count);
    };

    render() {
        // let count = 10;
        //const increment = () => {
          //  count++;
          //console.log("Count: ", count);
          //};

          // const decrement = () => {
              //count--;
           //console.log("Count: ", count);   
          //}

          return (
              <div>
                  <button onClick={this.increment}>Buy</button>
                  <button onClick={this.decrement}>Sell</button>
                  <h2>TotalBikes: {this.state.count}</h2>
              </div>
          );
        }
    }
 
export default Counter;
import React, { Component } from 'react';

class MyComp extends Component {
    state = { 
        title: "Topper Skills"
     }; 
    render() { 
        return (
            <h1>
                My Component, {this.state.title}, City: {this.props.city}
            </h1>
        );
    }
}
 
export default MyComp;
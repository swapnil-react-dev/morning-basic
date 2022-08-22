import React, { Component } from 'react';

class ClassComp extends React.Component {
    state = { 
        season: "Monsoon",
     } 
     constructor() {
         super();
         console.log("constructor")
     }

     static getDerivedStateFromProps(nextProps, prevState) {
         console.log("getDerivedStateFromProps: ",nextProps.month);
     
 switch (parseInt(nextProps.month)) {
     case 10:
     case 11:
     case 9:
     case 1:
         return { season:"Winter"};
     case 2:    
     case 3:    
     case 4:    
     case 5: 
        return { season:"Summer"};
     case 6:      
     case 7:      
     case 8:      
     case 9:
         return { season: "Monsoon"};      
 }
} 

componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidupdate: ", snapshot);

}

increment = () => {
    this.setState((state) => ({ count: state.count + 1}));
    console.log("increment: ", this.state.count);
}


shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentupdate");
    console.log("Current state: ", this.state.season)
    console.log("Next State: ", nextState.season)
    if (this.state.season == nextState.season) return false;
    return true;
}

    render() { 
        console.log("render");
        return (
          <div>
           <h1> I like {this.state.season}</h1>
          </div>

        );
    }
}
 
export default ClassComp;



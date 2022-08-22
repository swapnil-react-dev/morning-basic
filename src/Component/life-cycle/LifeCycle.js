import React ,{ Component } from 'react';

import ClassComp from './ClassComp';



class LifeCycle extends React.Component {

    state = { month: 0 }
    
    handleChange = (e) => {
        this.setState({ month: e.target.value});
    };
    render() { 
        return (
            <div>
                <h2>Life cycle</h2>

                <select onChange={this.handleChange}>
                <option value={0}>Jan</option>
                <option value={1}>feb</option>
                <option value={2}>mar</option>
                <option value={3}>Apr</option>
                <option value={4}>May</option>
                <option value={5}>Jun</option>
                <option value={6}>July</option>
                <option value={7}>Aug</option>
                <option value={8}>sep</option>
                <option value={9}>oct</option>
                <option value={10}>Nov</option>
                <option value={11}>Dec</option>
                </select>
               {this.state.month > 6 && <ClassComp month={this.state.month}/>}
            </div>
        );
    }
}
 
export default LifeCycle;

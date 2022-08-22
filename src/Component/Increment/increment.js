import React,{Component} from 'react';

import { useState } from "react";

const Increment = () => {
    const [data, setData] = useState(0);
    const increment = () => {
        setData(data + 1);
        if (data == 25) {
            setData(0);
        }
    };
    return ( 
        <div className="App">
            <h1>{data}</h1>
            <button onClick={increment}>+++</button>
        </div>
        
     );
}
 
export default Increment;
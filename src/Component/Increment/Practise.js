// import react from "react";
import React from 'react';
import { useState } from "react";
const Practise = () => {
    const [data,setdata] = useState(0);
     const increment = () => {
         setdata(data + 1);
         if (data == 10) {
             setdata(0);
         }
     }
     const decrement = () => {
         setdata(data - 1);
         if (data == 0) {
             setdata(0);
         }
     }


    return ( 
        <>
        <h2 className=""></h2>
        <h1>{data}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </>
     );
}
 
export default Practise;


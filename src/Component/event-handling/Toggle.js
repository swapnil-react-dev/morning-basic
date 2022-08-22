import React, { useState } from 'react';

const Toggle = () => {
    const [show, setShow] = useState(true);
    return ( 
        <>
        <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"}</button>
        <label>Password:</label>
        <input type = { show ? "text" : "password"}/>
        {show &&(
            <div>
                <p>
                    Swapnil sham bhagwat
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae eos illo ipsam dolor obcaecati et vero consectetur dolorum, esse ullam in aliquid suscipit, recusandae, voluptate nulla ipsum cumque assumenda velit.
                </p>
            </div>
        )}

        
        </>
     );
};
 
export default Toggle;
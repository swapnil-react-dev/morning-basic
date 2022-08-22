import React, { useState } from 'react';

const Password = () => {
    const [show, setShow] = useState(true)
    return ( 
        <>
        <div>
         <label>Email</label>
         <input type="text" placeholder='bhagwatswapnil37@gmail.com'/>
         <br />
         <label>Password</label>
         <input type = { show ? "text" : "password"}
         />
         <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"}</button>
         </div>
        </>
     );
}
 
export default Password;

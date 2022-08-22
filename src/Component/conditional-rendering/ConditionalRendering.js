import React, { useState } from 'react';

const ConditionalRendering = () => {
    const [isError, setError] = useState(true);

    let message = "" ;
    if(isError) {
        message = <p>There is an error, its failed</p>
    } else {
        message = <p>There is no error, ite success</p>
    }
    return ( 
        <div>
            <h1>ConditionalRendering</h1>
            {message}
            {isError && <h3 style={{backgroundColor:"red"}}>ERRORS:-</h3>}

            {isError ? (
                <p>ther is an error, ites failed</p>
            ) : (
                <p>there is no error, its success</p>
            )}
        </div>
     );
};
 
export default ConditionalRendering;
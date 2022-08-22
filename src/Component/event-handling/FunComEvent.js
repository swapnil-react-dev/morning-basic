import React ,{useState} from 'react';

const FunComEvent = () => {
    const [title] = useState ("Topper Skills");
    const handleClick = () => {
        alert ("Hi" + title)
    };
    return ( 
        <>
        <button onClick={handleClick}>Click</button>
        
        </>
     );
};
 
export default FunComEvent;
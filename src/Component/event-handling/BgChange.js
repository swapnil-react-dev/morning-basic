import React, { useState } from 'react';

const BgChange = () => {

    const [position, setPosition] = useState({x: 0, y: 0})
 const handlePosition = (e) => {
     setPosition({
         x: e.clientX,
         y: e.clientY,
     });
 };
 const { x, y } = position

    return ( 
        <div style={{height:"80vh",backgroundColor: `rgb(100,${x},${y})`}}
        onMouseMove={handlePosition}
        >

        </div>
     );
};
 
export default BgChange;

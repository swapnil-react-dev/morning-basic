// import React, { useState } from 'react';

// const ListRendering = () => {
//     const [items, setItems] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
   
//     const deleteItem = (index) => {
//         const arr = [...items];
//         arr.splice(index, i);
//         setItems(arr);
//     }
//     return ( 
//         <>
//         <h2>List-Rendering</h2>
//         <ul>
//             {items.map((n, i) => (

            
//         <li key={i}>
//             {n} <span onClick={() => deleteItem(i)}> - X</span>
//         </li>
//         ))}
//         </ul>
//         </>
//      );
// }
 
// export default ListRendering;
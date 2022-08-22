import React, { useState } from 'react';
import Product from './Product';

const ArrayObject = () => {
    const [products, setProduct] = useState([
        {
            id:1,
            title:"AAAAA",
            brand:"bbbbbb",
            price:100000,
            desc:"sample product description",
            pic: "1.jpg",
        },
        {
            id:2,
            title:"AAAAA",
            brand:"bbbbbb",
            price:100000,
            desc:"sample product description",
            pic: "1.jpg",
        },
        {
            id:3,
            title:"AAAAA",
            brand:"bbbbbb",
            price:100000,
            desc:"sample product description",
            pic: "1.jpg",
        },
        {
            id:4,
            title:"AAAAA",
            brand:"bbbbbb",
            price:100000,
            desc:"sample product description",
            pic: "1.jpg",
        },
        {
            id:5,
            title:"AAAAA",
            brand:"bbbbbb",
            price:100000,
            desc:"sample product description",
            pic: "1.jpg",
        },
        {
            id:6,
            title:"AAAAA",
            brand:"bbbbbb",
            price:100000,
            desc:"sample product description",
            pic: "1.jpg",
        },
    ])
    return ( 
        <>
        <h2>Array Object</h2>
        <div style={{ display:"flex", flexWrap:"wrap"}}>
            {Array.isArray(products) && 
            products.map((prod) => <Product key={ prod, id } {...prod}/>)}
            

        </div>
        </>
     );
};
 
export default ArrayObject;
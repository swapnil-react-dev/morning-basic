import React from 'react';

const Product = ({ pic,id, title, brand, price, desc}) => {
    return ( 
        <div style={{
            width:200,
            padding:5,
            margin: 2,
            border: "1px solid #999",
            borderRadius:5,
        }}>
<img src={`assets/images/${pic}`} style={{ width: "100"}} />
<h4>{title}</h4>
<h4>{id}</h4>
<h4>{brand}</h4>
<h4>{price}</h4>
<h4>{desc}</h4>
        </div>
     );
};
 
export default Product;
import React from 'react';
import { useEffect, useState } from 'react';
const Form = () => {
    const [user,setuser] = useState({
        // name:"",
        // mobile:""
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setuser({...user, [name]: value})
    };
    const handesubmit = (e) => {
        e.preventDefault();
        console.log("user: ", user);
    }
    useEffect (() => {
        localStorage.setItem("user",JSON.stringify(user))
    })

    return ( 
        <>
        <h1>Admmission Form</h1>
        <form onSubmit={handesubmit}>
        <label>First Name</label>
        <input type="text" name='First Name' onChange={handleChange} /> <br />
        <label>Last Name</label>
        <input type="text" name='last Name' onChange={handleChange} /> <br />
        <label >Mobile</label>
        <input type="tel" name='Mobile' onChange={handleChange} /> <br />
        <label >password</label>
        <input type="password" name="password" onChange={handleChange} /> <br />
        <input type="submit"/>

        </form>
        
        </>
     );
}
 
export default Form;
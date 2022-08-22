import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const content = (
//   <div className="container">
//     <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"></img>
//   </div>
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// const content = (
//     <div className="container">
//       <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"></img>
//     </div>
//   )

// const content = (
//   <div className='container'>
//     <img src = "https://dwglogo.com/wp-content/uploads/2017/09/React_logo_vector.svg"></img>
   
//   </div>
// )

 const div= document.querySelector('.root')
 //ReactDOM.render(content,div)

ReactDOM.render(<App/>, div);

// Rules of JSX cpmpare with HTML
//1.class - className
//2.<labelfor> - <labelhtmlfor>
//3.<inputtabindex> - <tabIndex>

// VDOM
//ReactDOM.render(element, container)  library
//Root element one to one comparision
//Updates properties in VDOM
//VDOM unnessary change hot nahi & we get good performance
//virtual DOM is usually associated with REact elements since 
//they are the object representing the user interface

//VDOM - The VDOM is aprogramming concept where an idea or "virtual",
//       representation of a UI is kept in memory and syned with
//       "real DOM" by a library such as REACTDOM.this process is called RECONCILIATION.

// Elements of different type: old tree tear doe=wn and build a new tree (DESTROY)
// Elements of Same type: Only updates the change attributes.

//The diffind algorithm
// when diffing two trees , React first compares the two root elements
// the behaviour is different depending on the type of root element.

//Web component : it is used to create custom reusable elements which represent a part/patch
//               on the web page.
//               a component can be created to design a small part of a web page which is
//               used at multiple places.

//             A component can have one or more react elements

//             Types of component
//             1. class component
//             2. function component

//     class component ?
//    if a javascript class extends  React.component or React.pureComponent class
//     and overide a render method then this is called class component

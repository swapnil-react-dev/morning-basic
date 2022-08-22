// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import ConditionalRendering from "./Component/conditional-rendering/ConditionalRendering";
import Eventhandling from "./Component/event-handling/EventHandling";
import LifeCycle from "./Component/life-cycle/LifeCycle";
// import ArrayObject from "./Component/list-rendering/Arrayobject";
import ListRendering from "./Component/list-rendering/ListRendering";
import StateDemo from "./Component/state-demo/StateDemo";
// import increment from "./Component/Increment/increment";
import Increment from "./Component/Increment/increment";
import Form from "./Component/Form/From";
import Practise from "./Component/Increment/Practise";
import Timer from "./Component/Timer/Timer";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App component</h1>
        {/* <StateDemo/> */}
        {/* <LifeCycle/> */}
        {/* <ConditionalRendering/> */}
        {/* <ListRendering/> */}
        {/* <Eventhandling/> */}
        {/* <Increment/> */}
        {/* <Form/> */}
        {/* <Practise/> */}
        {/* <Timer/>         */}
        
        
        
      </div>
      
    )
  }
}

export default App;

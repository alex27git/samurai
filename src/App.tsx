import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Technologes} from "./Technologes";

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <h3>What to learn</h3>
//         <div>
//           <input/>
//           <button>+</button>
//         </div>
//         <ul>
//           <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
//           <li><input type="checkbox" checked={true}/> <span>JS</span></li>
//           <li><input type="checkbox" checked={false}/> <span>React</span></li>
//         </ul>
//         <div>
//           <button>All</button>
//           <button>Active</button>
//           <button>Completed</button>
//         </div>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Header/>
      <Technologes/>
    </div>
  );
}

export default App;

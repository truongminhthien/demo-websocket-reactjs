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

// App.js
// export default App;

import React from 'react';
import WebSocketComponent from './WebSocketComponent';

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <WebSocketComponent />
    </div>
  );
};

export default App;



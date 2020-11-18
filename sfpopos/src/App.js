// react library
// files stored in node_modules folder do not begin w ./ ~ files imported from a dependency 
import React from 'react'; 
// logo image
// Files you create, that are stored locally will always begin with ./ 
import logo from './logo.svg'; 
// app code
import './App.css';


// JSX is an extension of JS language that generates HTML 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

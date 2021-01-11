// react library- for creating user interfaces
// files stored in node_modules folder do not begin w ./ ~ files imported from a dependency 
import React from 'react'
// logo image
// Files you create, that are stored locally will always begin with ./ 
// import logo from './logo.svg'; 
// app code
import './App.css'
// importing default from Title.js to use the component in App.js
import Title from './Title/Title'
import POPOList from './POPOSList/POPOList'
import Footer from './Footer/Footer'
import { HashRouter as Router, Route } from 'react-router-dom'
import About from './About/About'
import POPOSDetails from './POPOSDetails/POPOSDetails'

// JSX is an extension of JS language that generates HTML 
// component has no child components so we use the self closing tag '/>'
function App() {
  return (
    <Router>
      <div className="App">
        <Title / >
        <Route exact path="/" component={POPOList} />
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={POPOSDetails} />
        <Footer />
      </div> 
    </Router>
  );
}

export default App;

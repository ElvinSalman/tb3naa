import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from "./components/About/About";
import Info from "./components/Info/Info";
import Contact from "./components/Contact/Contact";
import HomePage from './components/Welcome/HomePage';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar 
    // title='Some User Page'
    />
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/info' component={Info}/>
    <Route exact path='/contact' component={Contact}/>
    <Route />
    </Switch>
    </div>
    <Footer/> 
    </Router>
    
  );
}

export default App;

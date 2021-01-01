import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from "./components/About/About";
import Info from "./components/Info/Info";
import Contact from "./components/Contact/Contact";
import HomePage from './components/Welcome/HomePage';
import Footer from './components/footer/footer';
import Char from './components/infopages/Char';
import Assembly from './components/infopages/Assembly';
import Vibr from './components/infopages/Vibr';
import Pzu from './components/infopages/Pzu';
import AntiIce from './components/infopages/AntiIce';
import Oil from './components/infopages/Oil';
import Adjustment from './components/infopages/Adjustment';
import Layout from "./components/layout/layout"
function App() {
  return (
    <Router>
    <div className="App">
    <Layout>

    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/info' component={Info}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/info/char' component={Char}/>
    <Route exact path='/info/assembly' component={Assembly}/>
    <Route exact path='/info/vibr' component={Vibr}/>
    <Route exact path='/info/pzu' component={Pzu}/>
    <Route exact path='/info/antiIcing' component={AntiIce}/>
    <Route exact path='/info/oil' component={Oil}/>
    <Route exact path='/info/adj' component={Adjustment}/>

    <Route render={()=>(
      <div>Error</div>
    )}/>
    </Switch>
     </Layout> 
    </div>
   
    </Router>
    
  );
}

export default App;

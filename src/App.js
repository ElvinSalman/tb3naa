import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route,Switch} from 'react-router-dom'
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

import Common from './components/char/Common';
import Tech from './components/char/Tech';
import Limit from './components/char/Limit';
import Engine from './components/char/Engine';

import Compressor from './components/Assembly/Compressor';
import Fire from './components/Assembly/Fire';
import ComprTurb from './components/Assembly/ComprTurb';
import FreeTurb from './components/Assembly/FreeTurb';
import Freed from './components/Assembly/Freed';
import Revenge from './components/Assembly/Revenge';
import Box from './components/Assembly/Box';
import AirStarter from './components/Assembly/AirStarter';

import Purpose from './components/Vibr/Purpose';
import ContentAndWork from './components/Vibr/ContentAndWork';
import Serviceability from './components/Vibr/Serviceability';

import Appointment from './components/Pzu/Appointment';
import Basic from './components/Pzu/Basic';
import Work from './components/Pzu/Work';
import Operating from './components/Pzu/Operating';

import BasicOil from './components/Oil/Basic';
import BasicElements from './components/Oil/BasicElements';
import WorkSystem from './components/Oil/WorkSystem';
import Control from './components/Oil/Control';
import Malfunction from './components/Oil/Malfunction';

import BasicAdj from './components/Adj/BasicAdj';
import FuelBillets from './components/Adj/FuelBillets';
import BasicDosing from './components/Adj/BasicDosing';
import TurboCompAdj from './components/Adj/TurboCompAdj';
import FreeTurboSpin from './components/Adj/FreeTurbSpinAdj';
import Regulators from './components/Adj/Regulators';
import Adaptation from './components/Adj/Adaptation';
import Synch from './components/Adj/Synch';
import TempReg from './components/Adj/TempReg';
import ElecReg from './components/Adj/ElecReg';

import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation()

  return (
    <BrowserRouter basename={i18n.language}>
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


    <Route exact path='/info/char/common' component={Common}/>
    <Route exact path='/info/char/tech' component={Tech}/>
    <Route exact path='/info/char/limit' component={Limit}/>
    <Route exact path='/info/char/engine' component={Engine}/>


    <Route exact path='/info/assembly/compressor' component={Compressor}/>
    <Route exact path='/info/assembly/fire' component={Fire}/>
    <Route exact path='/info/assembly/comprturb' component={ComprTurb}/>
    <Route exact path='/info/assembly/freeturb' component={FreeTurb}/>
    <Route exact path='/info/assembly/freed' component={Freed}/>
    <Route exact path='/info/assembly/revenge' component={Revenge}/>
    <Route exact path='/info/assembly/box' component={Box}/>
    <Route exact path='/info/assembly/airstarter' component={AirStarter}/>


    <Route exact path='/info/vibr/purpose' component={Purpose}/>
    <Route exact path='/info/vibr/contentandwork' component={ContentAndWork}/>
    <Route exact path='/info/vibr/serviceability' component={Serviceability}/>


    <Route exact path='/info/pzu/appointmentandbasicinformation' component={Appointment}/>
    <Route exact path='/info/pzu/basicelements' component={Basic}/>
    <Route exact path='/info/pzu/work' component={Work}/>
    <Route exact path='/info/pzu/operatingrules' component={Operating}/>



    <Route exact path='/info/oil/basicoil' component={BasicOil}/>
    <Route exact path='/info/oil/basicelements' component={BasicElements}/>
    <Route exact path='/info/oil/worksystem' component={WorkSystem}/>
    <Route exact path='/info/oil/controloveroperation' component={Control}/>
    <Route exact path='/info/oil/malfunctionsofthesystem' component={Malfunction}/>


    <Route exact path='/info/adj/basicadj' component={BasicAdj}/>
    <Route exact path='/info/adj/fuelbillets' component={FuelBillets}/>
    <Route exact path='/info/adj/basicdosing' component={BasicDosing}/>
    <Route exact path='/info/adj/turbocompadj' component={TurboCompAdj}/>
    <Route exact path='/info/adj/freeturbospinadj' component={FreeTurboSpin}/>
    <Route exact path='/info/adj/regulators' component={Regulators}/>
    <Route exact path='/info/adj/adaptation' component={Adaptation}/>
    <Route exact path='/info/adj/synchronizer' component={Synch}/>
    <Route exact path='/info/adj/temperatureregulator' component={TempReg}/>
    <Route exact path='/info/adj/electronicregulator' component={ElecReg}/>

    <Route render={()=>(
      <div>Error</div>
    )}/>
    </Switch>
     </Layout> 
    </div>
   
    </Router>
    </BrowserRouter>
  );
}

export default App;

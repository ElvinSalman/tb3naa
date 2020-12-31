import React, { Component } from 'react'
import "./footer.css";
import socData from "../../data/socialPage.json";
 class Footer extends Component {
    render() {
        return (
          
        <div className='navbar-nav navbar navbar-expand-lg navbar-darg bg-dark text-white mb-3 p-3 footMain'>
           <div className="col-md-4 col-12 soc">
           <a href={socData.facebook} target="_blank" className="btn-face m-b-20">
              <i className="fab fa-facebook-f"/>
            </a>
            <a href={socData.globe} target="_blank" className="btn-globe">
              <i className="fas fa-globe"/>
            </a>
            <a href={socData.instagram} target="_blank" className="btn-instagram">
              <i className="fab fa-instagram"/>
            </a>
            </div>
           <div className="col-md-8 col-12 cred">
            Created by : Salmanov Elvin 1457R
           </div>

        </div>
            
        )
    }
}
export default Footer;
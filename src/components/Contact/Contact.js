import React, { Component } from 'react'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./Contact.css";

 class Contact extends Component {
    render() {
        return (
        
<>
<div className="container list-group" style={{marginTop:50,marginBottom:60}}>
                <div className="row d-flex justify-content-center" style={{marginBottom:30}}>
<div className="col-12 col-md-12 text-center">
    <h2>NAA əlaqə</h2>
</div>
<div className="col-12 col-md-12 text-center">
<img src="https://upload.wikimedia.org/wikipedia/az/b/b5/MAA_yeni.jpg" width="70%" height="80%" alt="naa" />
</div>
<div className="col-12 col-md-4 text-center">
<i className="fas fa-phone-alt" style={{marginRight:15,fontSize:20}}></i>
<a href={'tel:' + "+994124972628"} style={{textDecoration: 'none', color: "#111",fontSize: "20px",fontWeight: "normal",lineHeight: "1.8571428571em"}}>(+994 12) 497-26-28  </a>              
</div>
<div className="col-12 col-md-4 text-center">
<i className="fas fa-envelope" style={{marginRight:15,fontSize:20}}></i>
<a href={'mailto:' + "mail@naa.edu.az"} style={{textDecoration: 'none', color: "#111",fontSize: "20px",fontWeight: "normal",lineHeight: "1.8571428571em"}}>mail@naa.edu.az</a>                
</div>
<div className="col-12 col-md-4 text-center">
<i className="fas fa-map-marker-alt" style={{marginRight:15,fontSize:20}}></i>
<span style={{color: "#111",fontSize: "20px",fontWeight: "normal",lineHeight: "1.8571428571em"}}>
    Bakı ş., Mərdəkan prospekti 30
</span>
</div>
<div style={{marginTop:50,marginBottom:50,position:"relative",height:400}} className="col-12 col-md-12 map text-center">
    {/* <h2>Saytı yazan tələbə haqqında məlumat</h2> */}

    {/* <Map google={this.props.google}
          initialCenter={{
            lat: 40.45331,
            lng: 50.06615
          }}
          zoom={13}
          onClick={this.onMapClicked}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />
</Map> */}
<iframe
              className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.9971856127218!2d50.06531561489584!3d40.453199261345524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030608b9a760659%3A0x782f42f85f9e39ef!2sNational%20Aviation%20Academy!5e0!3m2!1sru!2s!4v1609582023179!5m2!1sru!2s"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen
            />
</div>
        {/* <div className="col-12 col-md-6">
            
        </div>
        <div className="col-12 col-md-6">
            
        </div> */}
</div>
     
</div>

{/* <div className="container">
    <div className="row">
    
    </div>
</div>  */}
</>
        
        )
    }
}

export default Contact;

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyDkg_nYYS4xon_dgwADolYvtVSWaU6fNTw")
//   })(Contact)
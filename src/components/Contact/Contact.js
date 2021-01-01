import React, { Component } from 'react'

 class Contact extends Component {
    render() {
        return (
        
<>
<div className="container list-group" style={{marginTop:50,marginBottom:200}}>
                <div className="row d-flex justify-content-center" style={{marginBottom:30}}>
<div className="col-12 col-md-12 text-center">
    <h2>NAA əlaqə</h2>
</div>
<div className="col-12 col-md-12 text-center">
<img src="https://upload.wikimedia.org/wikipedia/az/b/b5/MAA_yeni.jpg" width="70%" height="80%" alt="naa" />
</div>
<div className="col-12 col-md-4">
<i className="fas fa-phone-alt" style={{marginRight:15,fontSize:20}}></i>
<a href={'tel:' + "+994124972628"} style={{textDecoration: 'none', color: "#111",fontSize: "20px",fontWeight: "normal",lineHeight: "1.8571428571em"}}>(+994 12) 497-26-28  </a>              
</div>
<div className="col-12 col-md-4">
<i className="fas fa-envelope" style={{marginRight:15,fontSize:20}}></i>
<a href={'mailto:' + "mail@naa.edu.az"} style={{textDecoration: 'none', color: "#111",fontSize: "20px",fontWeight: "normal",lineHeight: "1.8571428571em"}}>mail@naa.edu.az</a>                
</div>
<div className="col-12 col-md-4">
<i className="fas fa-map-marker-alt" style={{marginRight:15,fontSize:20}}></i>
<span style={{color: "#111",fontSize: "20px",fontWeight: "normal",lineHeight: "1.8571428571em"}}>
    Bakı ş., Mərdəkan prospekti 30
</span>
</div>
{/* <div style={{marginTop:50,marginBottom:50}} className="col-12 col-md-12 text-center">
    <h2>Saytı yazan tələbə haqqında məlumat</h2>
</div>
        <div className="col-12 col-md-6">
            
        </div>
        <div className="col-12 col-md-6">
            
        </div> */}
</div>
     
</div>

<div className="container">
    <div className="row">
    
    </div>
</div> 
</>
        
        )
    }
}


export default Contact;
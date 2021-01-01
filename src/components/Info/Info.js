import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import tb from "../../data/tb3Info.json"

export default class Info extends Component {
    render() {
        return (
        
<>
<div className="container list-group" style={{marginTop:50,marginBottom:50}}>
<div className="row d-flex justify-content-center" style={{marginBottom:30}}>
<div className="col-10 col-md-8 text-center">
    <h2>TB3-117BM mühərrikinə aid altmövzular</h2>
</div>
    
</div>
  
  <div className="row d-flex justify-content-center">
            
            <div className="col-10 col-md-6">
            {tb.map((item,index)=>(
                        <Link key={index} to={item.to} className="list-group-item list-group-item-action">{item.title}</Link>
                ))}
                
  {/* <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a> */}
 </div>
  </div>
  
</div>
</>
        
        )
    }
}

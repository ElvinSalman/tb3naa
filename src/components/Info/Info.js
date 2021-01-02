import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import tb from "../../data/tb3Info.json"

export default class Info extends Component {
    render() {
        return (
        
<>
<Breadcrumb title="TB3-117BM mühərrikinə aid altmövzular">
        <BreadcrumbItem name="Ana səhifə" href="/" />
        <BreadcrumbItem name="TB3-117BM mühərrikinə aid altmövzular" current />
</Breadcrumb>
<div className="container list-group" style={{marginTop:50,marginBottom:50}}>

  
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

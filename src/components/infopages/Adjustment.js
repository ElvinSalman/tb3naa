import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import infoAdj from "../../data/adj.json";

export default class Adjustment extends Component {
    render() {
        return (
            <>
<Breadcrumb title="ТВ3-117ВМ müherrikin yanacağla qidalanma və tənzimlənmə sistemi">
        <BreadcrumbItem name="Ana səhifə" href="/" />
        <BreadcrumbItem name="ТВ3-117ВМ müherrikin yanacağla qidalanma və tənzimlənmə sistemi" current />
</Breadcrumb>
            
            <div className="container list-group" style={{marginTop:50,marginBottom:200}}>
                <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6">
                {infoAdj.map((item,index)=>(
                        <Link key={index} to={item.to} className="list-group-item list-group-item-action">{item.title}</Link>
                ))}
                </div>
                </div>
            </div>
            </>
        )
    }
}

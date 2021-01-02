import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import infoOil from "../../data/oil.json";

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

export default class Pzu extends Component {
    render() {
        return (
            <>
            <Breadcrumb title="ТВ3-117ВМ müherrikin yağ sistemi">
                    <BreadcrumbItem name="Ana səhifə" href="/" />
                    <BreadcrumbItem name="ТВ3-117ВМ müherrikin yağ sistemi" current />
            </Breadcrumb>
            <div className="container list-group" style={{marginTop:50,marginBottom:250}}>
                <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6">
                {infoOil.map((item,index)=>(
                        <Link key={index} to={item.to} className="list-group-item list-group-item-action">{item.title}</Link>
                ))}
                </div>
                </div>
            </div>
</>
        )
    }
}

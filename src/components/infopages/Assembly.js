import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import infoAssem from "../../data/assembly.json";

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

export default class Assembly extends Component {
    render() {
        return (
            <>
            <Breadcrumb title="ИВ-500 mühərrikin titrəmə nəzarəti sistemi">
                    <BreadcrumbItem name="Ana səhifə" href="/" />
                    <BreadcrumbItem name="ИВ-500 mühərrikin titrəmə nəzarəti sistemi" current />
            </Breadcrumb>
            <div className="container list-group" style={{marginTop:50,marginBottom:200}}>
                <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6">
                {infoAssem.map((item,index)=>(
                        <Link key={index} to={item.to} className="list-group-item list-group-item-action">{item.title}</Link>
                ))}
                </div>
                </div>
            </div>
</>
        )
    }
}

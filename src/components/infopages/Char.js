import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import infoChar from "../../data/char.json";

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

export default class Char extends Component {
    render() {
        return (
            <>
            <Breadcrumb title="ТВ3-117ВМ müherrikin ümumi xarakteristikası">
                    <BreadcrumbItem name="Ana səhifə" href="/" />
                    <BreadcrumbItem name="ТВ3-117ВМ müherrikin ümumi xarakteristikası" current />
            </Breadcrumb>
            <div className="container list-group" style={{marginTop:50,marginBottom:200}}>
                <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6">
                {infoChar.map((item,index)=>(
                        <Link key={index} to={item.to} className="list-group-item list-group-item-action">{item.title}</Link>
                ))}
                </div>
                </div>
            </div>
</>
        )
    }
}

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";



export default class AntiIce extends Component {
    render() {
        return (
            <>
            <Breadcrumb title="Mühərrikin buzlanma ələyhinə sistemi və ПЗУ">
                    <BreadcrumbItem name="Ana səhifə" href="/" />
                    <BreadcrumbItem name="Mühərrikin buzlanma ələyhinə sistemi və ПЗУ" current />
            </Breadcrumb>
            <div className="container list-group" style={{marginTop:50,marginBottom:400}}>
                <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6">
               Information
                </div>
                </div>
            </div>
</>
        )
    }
}

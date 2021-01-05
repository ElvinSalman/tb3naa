import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';

const AntiIce=()=>{

    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang=="en"?"Engine anti-icing system and DPS":lang=="ru"?"Система антиобледенения двигателя и ПЗУ":"Mühərrikin buzlanma ələyhinə sistemi və ПЗУ";
    let info=lang=="en"?"TB3-117BM Engine Subtopics":lang=="ru"?"Подтемы двигателя TB3-117M":"TB3-117BM mühərrikinə aid altmövzular";
    let home=lang=="en"?"Home":lang=="ru"?"Главная":"Ana səhifə";

        return (
            <>
            <Breadcrumb title={title}>
                    <BreadcrumbItem name={home} href="/" />
                    <BreadcrumbItem name={info} href="/info" />
                    <BreadcrumbItem name={title} current />
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
export default AntiIce;
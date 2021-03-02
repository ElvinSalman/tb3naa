import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';

const Basic=()=> {
    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang==="en"?"The main elements":lang==="ru"?"Основные элементы":"Əsas elementlər";
    let info2=lang==="en"?"Dust protection device (DPS)":lang==="ru"?"Устройство защиты от пыли (ПЗУ)":"Tozqoruyucu qurğu(ПЗУ)";
    let info1=lang==="en"?"TB3-117BM Engine Subtopics":lang==="ru"?"Подтемы двигателя TB3-117M":"TB3-117BM mühərrikinə aid altmövzular";
    let home=lang==="en"?"Home":lang==="ru"?"Главная":"Ana səhifə";
        return (
            <div>
                <Breadcrumb title={title}>
                    <BreadcrumbItem name={home} href="/" />
                    <BreadcrumbItem name={info1} href="/info" />
                    <BreadcrumbItem name={info2} href="/info/pzu" />
                    <BreadcrumbItem name={title} current />
                </Breadcrumb>
            </div>
        )
}
export default Basic;
import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';

const ContentAndWork=()=> {
    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang==="en"?"Composition and work":lang==="ru"?"Состав и работа":"Tərkibi və işi";
    let adres=lang==="en"?"/info/vibration":lang==="ru"?"/info/vibraciya":"/info/vibrasiya";
    let info2=lang==="en"?"IV-500 engine vibration control system":lang==="ru"?"Система контроля вибрации двигателя ИВ-500":"ИВ-500 mühərrikin titrəmə nəzarəti sistemi";
    let info1=lang==="en"?"TB3-117BM Engine Subtopics":lang==="ru"?"Подтемы двигателя TB3-117M":"TB3-117BM mühərrikinə aid altmövzular";
    let home=lang==="en"?"Home":lang==="ru"?"Главная":"Ana səhifə";
        return (
            <div>
                <Breadcrumb title={title}>
                    <BreadcrumbItem name={home} href="/" />
                    <BreadcrumbItem name={info1} href="/info" />
                    <BreadcrumbItem name={info2} href={adres} />
                    <BreadcrumbItem name={title} current />
                </Breadcrumb>
            </div>
        )
}
export default ContentAndWork;
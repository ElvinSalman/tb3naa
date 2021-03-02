import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';

const Common =()=> {
    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang==="en"?"General information about the engine":lang==="ru"?"Общие сведения о двигателе":"Mühərrik haqqinda ümumi məlumatlar";
    let adres=lang==="en"?"/info/characteristic":lang==="ru"?"/info/xarateristiki":"/info/xarakteristika";
    let info2=lang==="en"?"General characteristics of TV3-117VM engine":lang==="ru"?"Общие характеристики двигателя ТВ3-117ВМ":"ТВ3-117ВМ müherrikin ümumi xarakteristikası";
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
export default Common;

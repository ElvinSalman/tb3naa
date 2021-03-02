import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';

const AirStarter=()=> {
    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang==="en"?"Air starter СВ-78БА":lang==="ru"?"Пневмостартер СВ-78БА":"Hava starteri СВ-78БА";
    let adres=lang==="en"?"/info/assembly":lang==="ru"?"/info/ustanovkaosnovnixcastey":"/info/esashisselerinqurgusu";
    let info2=lang==="en"?"Installation of main parts of TV3-117ВМ engine":lang==="ru"?"Установка основных частей двигателя ТВ3-117ВМ":"ТВ3-117ВМ müherrikin əsas hissələrin qurğusu";
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
export default AirStarter;
import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';


const Tech=()=>{
    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang==="en"?"Engine technical information":lang==="ru"?"Техническая информация двигателя":"Mühərrikin texniki məlumatları";
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
                <table style={{marginBottom:80,width:"100%",border: "1px solid #a2a9b1"}} className="standard" border="1">
<tbody><tr>
<th style={{textAlign:"center",background:"#007bff",color:"#fff",padding: "0.2em 0.4em"}} colSpan="6">Технические характеристики двигателей ТВ3-117 и ВК-2500
</th></tr>
<tr>
<th width="200px" align="left">Модификация
</th>
<th width="130px">ТВ3-117В
</th>
<th width="130px">ТВ3-117ВМА
</th>
<th width="130px">ТВ3-117ВМА-СБМ1В
</th>
</tr>
<tr>
<td><b>Мощность на чрезвычайном режиме:</b>
</td>
<td>2200 <a href="/wiki/%D0%9B%D0%BE%D1%88%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D0%BB%D0%B0" title="Лошадиная сила">л.&#160;с.</a><sup id="cite_ref-h0_13-0" className="reference"><a href="#cite_note-h0-13">&#91;13&#93;</a></sup>
</td>
<td>2400 <a href="/wiki/%D0%9B%D0%BE%D1%88%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D0%BB%D0%B0" title="Лошадиная сила">л.&#160;с.</a><sup id="cite_ref-h0_13-1" className="reference"><a href="#cite_note-h0-13">&#91;13&#93;</a></sup>
</td>
<td>2800 <a href="/wiki/%D0%9B%D0%BE%D1%88%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D0%BB%D0%B0" title="Лошадиная сила">л.&#160;с.</a><sup id="cite_ref-:0_14-0" className="reference"><a href="#cite_note-:0-14">&#91;14&#93;</a></sup>
</td>
</tr>
<tr>
<td><b>Мощность на взлётном режиме:</b>
</td>
<td>2000 <a href="/wiki/%D0%9B%D0%BE%D1%88%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D0%BB%D0%B0" title="Лошадиная сила">л.&#160;с.</a><sup id="cite_ref-h0_13-2" className="reference"><a href="#cite_note-h0-13">&#91;13&#93;</a></sup>
</td>
<td>2200 <a href="/wiki/%D0%9B%D0%BE%D1%88%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D0%BB%D0%B0" title="Лошадиная сила">л.&#160;с.</a><sup id="cite_ref-h0_13-3" className="reference"><a href="#cite_note-h0-13">&#91;13&#93;</a></sup>
</td>
<td>2500 <a href="/wiki/%D0%9B%D0%BE%D1%88%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D0%BB%D0%B0" title="Лошадиная сила">л.&#160;с.</a><sup id="cite_ref-:0_14-1" className="reference"><a href="#cite_note-:0-14">&#91;14&#93;</a></sup>
</td>
</tr>
<tr>
<td><b>Удельный расход топлива:<sup id="cite_ref-17" className="reference"><a href="#cite_note-17">&#91;17&#93;</a></sup></b>
</td>
<td>0,220 кг/л.с·час
</td>
<td>0,215 кг/л.с·час
</td>
<td>0,209 кг/л.с·час
</td>
</tr>
<tr>
<td><b>Мощность на крейсерском режиме:</b>
</td>
<td colSpan="2" align="center">1500 <a href="/wiki/%D0%9B%D0%BE%D1%88%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D0%BB%D0%B0" title="Лошадиная сила">л.&#160;с.</a><sup id="cite_ref-h0_13-4" className="reference"><a href="#cite_note-h0-13">&#91;13&#93;</a></sup>
</td>
<td>1750 <a href="/wiki/%D0%9B%D0%BE%D1%88%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D0%BB%D0%B0" title="Лошадиная сила">л.&#160;с.</a><sup id="cite_ref-:0_14-2" className="reference"><a href="#cite_note-:0-14">&#91;14&#93;</a></sup>
</td>
</tr>
<tr>
<td><b>Длина:</b>
</td>
<td colSpan="5" align="center">2055 <a href="/wiki/%D0%9C%D0%BC" className="mw-redirect" title="Мм">мм</a>
</td></tr>
<tr>
<td><b>Ширина:</b>
</td>
<td colSpan="5" align="center">660 мм
</td></tr>
<tr>
<td><b>Высота:</b>
</td>
<td colSpan="5" align="center">728 мм
</td></tr>
<tr>
<td><b>Сухая масса:</b>
</td>
<td colSpan="3" align="center">295 <a href="/wiki/%D0%9A%D0%B3" className="mw-redirect" title="Кг">кг</a>
</td>
</tr>
<tr>
<td><b>Назначенный ресурс:</b>
</td>
<td colSpan="3" align="center">7500 часов
</td>
</tr></tbody></table>

            </div>
        )
    }
export default Tech;

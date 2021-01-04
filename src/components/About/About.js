import React, { Component } from 'react'
import Sli from "../Slider/Slider";
import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import "./About.css";

import { useTranslation } from 'react-i18next';

const About=()=> {

    const { t, i18n } = useTranslation(['about']);

        return (
        
<>
<Breadcrumb title={t('title')}>
        <BreadcrumbItem name={t('home')} href="/" />
        <BreadcrumbItem name={t('title')} current />
</Breadcrumb>
<div className="container">
<div className="row">
    <div className="col-12 col-md-6">
    <p>
    {t('content1')}
<br/> <br/>  {t('content2')}</p>
    </div>
    <div className="col-12 col-md-6">
    <img src="https://aviateka.su/wp-content/uploads/2018/03/naa-az-1024x709.jpg" alt="photo-1" width="100%" />
    </div>
</div>
<div className="row">
    <div className="col-12">
<p>
{t('content3')}
<br/>
{t('content4')}
<br/>
</p>
</div>

<div className="col-12 slider" >
    <Sli/>
</div>

<div className="col-12">
<p>
{t('content5')}
</p>
<br/>
<div className="col-12" style={{textAlign:"center",marginBottom:30}}>
<h2>
{t('boss')}
</h2>
</div>
<br/>
<div className="col-12" style={{marginBottom:30}}>

    <ul>
        <li>{t('boss1')}</li>
        <li>{t('boss2')}</li>
        <li>{t('boss3')}</li>
        <li>{t('boss4')}</li>
        <li>{t('boss5')}</li>
        <li>{t('boss6')}</li>

    </ul>

</div>
    </div>
</div>


</div>
</>
        
        )
}
export default About;

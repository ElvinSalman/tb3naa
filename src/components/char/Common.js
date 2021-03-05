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

<div className="container">
<div className="row">
    <div className="col-12 col-md-6">
    <p>
    Силовая установка боевого вертолета Ми-24 состоит из двух турбовальных
двигателей ТВЗ-117В, а также систем и устройств, обеспечивающих работу
двигателей.
Использование в вертолетной силовой установке двух двигателей повышает
безопасность полета, так как при выключении одного из них второй обеспечивает
продолжение полета или выполнение безопасной посадки. Правый и левый
двигатели силовой установки взаимозаменяемы при условии разворота
выхлопного патрубка.
<br/>Вертолетный газотурбинный двигатель ТВЗ-117В конструкции С.П. Изотова
был создан с учетом отечественного и зарубежного опыта проектирования,
производства и эксплуатации.
Особенностью конструкции турбовального двигателя является наличие
свободной турбины. Мощность, вырабатываемая свободной турбиной, передается
главному редуктору и составляет эффективную мощность двигателя.</p>
    </div>
    <div className="col-12 col-md-6">
    <img src="http://www.hups.mil.gov.ua/assets/uploads/2016/01/dvigun-TB3-117BM-hups_01.jpg" alt="photo-1" width="100%" />
    </div>
</div>
<br/>
<div className="row">
    <div className="col-12">
<p>
Эта особенность имеет ряд конструктивных и эксплуатационных
преимуществ:
<br/>
<ul>
    <li>позволяет получать желаемую частоту вращения ротора свободной
турбины (вала несущего винта вер</li>
<li>облегчает раскрутку ротора турбокомпрессора при запуске двигателя;</li>
<li>позволяет получать оптимальные расходы топлива при различных
условиях эксплуатации двигателя;</li>
<li>исключает необходимость установки фрикционной муфты в силовой
установке вертолета.</li>
</ul>
<br/>
</p>
</div>

<div className="col-12" >
1. Масса двигателя (сухого) 285 кг.
<br/>
2. Габаритные размеры двигателя:
<br/>
− длина с агрегатами и выхлопным патрубком 2055 мм.;
<br/>
− ширина 650 мм.;
<br/>
− высота 728 мм.
<br/>
3. Мощность на выводном валу при стандартной
<br/>
атмосфере с включенным ПЗУ ( при Н=0, V=0):
<br/>
− взлётный режим 2100 л.с.;
<br/>
− номинальный режим 1700 л.с.;
<br/>
− I крейсерский режим 1500 л.с.;
<br/>
− II крейсерский режим 1200 л.с.;
<br/>
− малый газ не более 200 л.с.
<br/>
4. Максимальный расход воздуха через компрессор 9,7 кг/с.
<br/>
5. Степень повышения давления в компрессоре 9,9.
<p></p>
</div>


</div>


</div>
</div>
        )
    }
export default Common;

import React, { Component, useState } from 'react'
import posed from 'react-pose';
import "./Navbar.css"

import HamburgerMenu from 'react-hamburger-menu'
import {Link} from 'react-router-dom';

import Select from 'react-select';

import { useTranslation } from 'react-i18next';

import headerLinks from "../../data/header.json";

const optionsLang = [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
    { value: 'az', label: 'AZ' }
  ]
const Animation = posed.div({
    closed: { height: 0 },
    open: { height: 'auto' }
})

const Navbar=(props)=>{
    const { history } = props

    const [open, setOpen] = useState(false);

    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;


   const handleClick=()=> { 
    setOpen(!open);
    }

   const  NavClick=()=>{
        setOpen( false);
        window.scrollTo(0, 0);
    }
        return (
            <nav className='navbar-nav navbar navbar-expand-lg navbar-darg bg-light mb-3 p-3 headMain'>
            <Link to='/' className='navbar-brand'>
                <img className="img" src="https://naa.az/wp-content/uploads/26637838_1503945446356288_1034795990_n.png" width="200px" alt="Logo"/>
            </Link>
{/* <h1>{t('title')}</h1> */}
            <Animation className="animation ml-auto" pose={open? 'open' : 'closed'}>
            {/* <ul className='navbar-nav ml-auto ul'>       
                <li className='nav-item active'> 
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-item active'> 
                    <Link to='/users' className='nav-link'>Users</Link>
                </li>
            </ul> */}
            <ul className='navbar-nav ml-auto ul'>
                {headerLinks[lang].map((item,index)=>(
                    <li className='nav-item active' onClick={NavClick} key={index}>
                        <Link to={item.to} className='nav-link'>{item.title}</Link>
                    </li>
                ))}
                <li className="nav-item active lang">
                
                </li>
            </ul>
            
            </Animation>


            <Select 
          placeholder={lang.toUpperCase()}
          isSearchable ={false}
          defaultValue ={lang.toUpperCase()}
          onChange={(item)=>{
          let val=item.value;
          i18n.changeLanguage(val);  
        //   let number = 0;
        //         headerLinks[lang].map((item, index) => {
        //           if (window.location.pathname.substr(3) !== '' && item.to ==
        //             window.location.pathname.substr(3)
        //           ) {
        //             number = index;
        //           }
        //         })
        //         window.location.pathname = val + headerLinks[val][number].to;
        //   window.location.pathname = i18n.language;
        }} options={optionsLang} /> 

        <span  className='span-ham'>
            <HamburgerMenu
            className='ham'
            isOpen={open}
            menuClicked={handleClick}
            width={35}
            height={25}
            strokeWidth={3}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
            />
            </span> 
        </nav>
        )
    
}
export default Navbar;
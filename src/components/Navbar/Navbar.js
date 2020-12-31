import React, { Component } from 'react'
import posed from 'react-pose';
import "./Navbar.css"

import HamburgerMenu from 'react-hamburger-menu'
import {Link} from 'react-router-dom';

import headerLinks from "../../data/header.json";

const Animation = posed.div({
    closed: { height: 0 },
    open: { height: 'auto' }
})

export default class Navbar extends Component {
    state={
        open:false,
    }

    handleClick() {
        this.setState({
            open: !this.state.open,
        });
    }
    render() {
        const {open} = this.state
        // const {title} = this.props;

        return (
            <nav className='navbar-nav navbar navbar-expand-lg navbar-darg bg-light mb-3 p-3 headMain'>
            <Link to='/' className='navbar-brand'>
                <img className="img" src="https://naa.az/wp-content/uploads/26637838_1503945446356288_1034795990_n.png" width="200px" alt="Logo"/>
            </Link>

            <span  className='span-ham'>
            <HamburgerMenu
            className='ham'
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={35}
            height={25}
            strokeWidth={3}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
            />
            </span>
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
                {headerLinks.map((item,index)=>(
                    <li className='nav-item active' key={index}>
                        <Link to={item.to} className='nav-link'>{item.title}</Link>
                    </li>
                ))}
            </ul>
            </Animation>
        </nav>
        )
    }
}

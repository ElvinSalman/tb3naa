import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import infoChar from "../../data/char.json";

export default class Char extends Component {
    render() {
        return (
            <div className="container list-group" style={{marginTop:50,marginBottom:200}}>
                <div className="row d-flex justify-content-center" style={{marginBottom:30}}>
<div className="col-10 col-md-8 text-center">
    <h2>ТВ3-117ВМ müherrikin ümumi xarakteristikası</h2>
</div>
    
</div>
                
                <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6">
                {infoChar.map((item,index)=>(
                        <Link key={index} to={item.to} className="list-group-item list-group-item-action">{item.title}</Link>
                ))}
                </div>
                </div>
            </div>

        )
    }
}

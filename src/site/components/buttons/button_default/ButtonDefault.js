import React from 'react';
import './ButtonDefault.css';

export default function ButtonDefault({
    name
}){
    return (
                <a className="buttonDefault" href="#orcamento">
                     {name}
                </a>
    )
}
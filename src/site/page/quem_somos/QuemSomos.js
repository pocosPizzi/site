import React from 'react';
import ButtonDefault from '../../components/buttons/button_default/ButtonDefault';
import './QuemSomos.css';

export default function QuemSomos(){
    return (
        <section id="quemSomos" className="contentQuemSomos">
            <div className="quemSomos">

            
            <h1 className="titleQuemSomos">Estamos aqui para ajudar você</h1>
            <p className="pQuemSomos">
                Uma empresa especializada em perfurações de poços.
            </p>
            <ButtonDefault name="Orçamento"/>
            </div>
        </section>
    )
}
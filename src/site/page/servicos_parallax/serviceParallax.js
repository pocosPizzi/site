import React from 'react';
import ButtonDefault from '../../components/buttons/button_default/ButtonDefault';
import './serviceParallax.css';

export default function ServiceParallax() {
    return (
        <section id="servicos" className="service">
            <h1 className="titleImg">
                Quer fazer um poço?
            </h1>
            <p className="pImg">
                Limpeza ou manutenção?
            </p>
            <ButtonDefault name="Orçamento" />
        </section>
    )
}
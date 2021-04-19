import React from 'react';
import ButtonDefault from '../../components/buttons/button_default/ButtonDefault';
import './Parallax.css';

export default function Parallax() {
    return (
        <section id="home" className="homeImage">
            <h1 className="titleImg">
                Poços Artesianos
            </h1>
            <p className="pImg">
                Peça agora mesmo seu orçamento
            </p>

            <ButtonDefault name="Orçamento" />
        </section>
    )
}
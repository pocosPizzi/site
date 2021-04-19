import React from 'react';
import Missao from '../../img/missao01.png';
import Visao from '../../img/visao01.png';
import Valores from '../../img/valores01.png';
import './MissaoVisaoValores.css';

export default function MissaoVisaoValores() {
    return (
        <section className="missaoVisaoValores">
            <div className="missao" >
                <img className="imgMissaoVisaoValore" src={Missao} alt="img missão" />
                <h1>MISSÃO</h1>
                <p>
                    Ser provedor desse bem tão precioso chamado água, contribuindo com a distribuição para muitas pessoas e até mesmo comunidades inteiras.
                </p>
            </div>
            <div className="visao" >
                <img className="imgMissaoVisaoValore" src={Visao} alt="img visao" />
                <h1>VISÃO</h1>
                <p>
                    Ser referência na área onde atuamos, expandindo no território nacional de forma sermos reconhecidos por todo o Brasil.
                </p>
            </div>
            <div className="valores" >
                <img className="imgMissaoVisaoValore" src={Valores} alt="img valores" />
                <h1>VALORES</h1>
                <p>Serenidade</p>
                <p>Responsabildade</p>
                <p>Respeito pelo meio ambiente</p>
            </div>
        </section>
    )
}
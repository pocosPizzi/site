import React from  'react';
import BannerHistory from '../../img/nossatrajetoria.png';
import './History.css';

export default function History(){
    return(
        <section className="history">
           
            <div className="pHistory">
                <h1>Pizzi Poços Artesianos</h1>
                <p>
                    Somos uma empresa especializada em perfurações, instalações, limpezas e manutenção de poços artesianos, que conta com uma equipe altamente treinada e capacitada para poder prestar o melhor atendimento ao nosso cliente.
                </p>
                <p>
                    Com uma grande aliada ao nosso favor à tecnologia, hoje podemos atender em outros estados brasileiros, não nos limitando a atender apenas o Rio Grande do Sul.
                </p>
                <p>
                    Possuimos uma vasta experiência no ramo com mais de 12 anos de atuação no segmento. Portanto estamos aqui prontos para te atender da melhor forma possível. 
                </p>
            </div>
            <img className="bannerHistory" src={BannerHistory} alt="img history"/>
            
        </section>
    )
}
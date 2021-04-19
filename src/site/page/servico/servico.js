import React from 'react';
import './servico.css';

export default function Servico() {
    return (
        <section className="servico">
            <div>
                <h1> NOSSOS SERVIÇOS</h1>
            </div>
            <div className="content">
                <div className="contentServico">
                    <h1>
                        Perfurações de Poços Artesianos
                    </h1>
                    <p>
                        Perfuramos poços artesianos sempre em acordo com as normas especificadas pela ABNT, para os mais diversos tipos de clientes. Desde empresas, condomínios e propiedades urbanas ou rurais.
                    </p>
                </div>
                <div className="contentServico">
                    <h1>
                        Instalação de Poços Artesianos
                    </h1>
                    <p>
                        Fazemos toda a parte de instalação hidráulica e elétrica necessária após a perfuração.
                   </p>
                </div>
                <div className="contentServico">
                    <h1>
                        Manutenção de Poços Artesianos
                    </h1>
                    <p>
                        Equipe extremamente técnica, capaz de realizar qualquer tipo de manutenção seja ela preventiva ou corretiva.
                    </p>
                </div>
                <div className="contentServico">
                    <h1>
                        Limpeza de Poços Artesianos
                    </h1>
                    <p>
                        Limpeza de poços pode ser necessária às vezes, para isso é preciso uma empresa competente para o serviço. Nós da Pizzi Poços Artesianos estamos preparados e prontos para qualquer eventual necessidade que possa surgir.
                    </p>
                </div>
            </div>
        </section>
    )
}
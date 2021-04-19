import React from 'react';
import IconWhats from '../../../img/whats.svg';
import './ButtonWhats.css';

export default function ButtonWhats() {
    return (
        <div>
            <a href="https://api.whatsapp.com/send?&amp;phone=5554999973244&amp;text=Olá!%20Vim%20do%20seu%20Site%20e%20gostaria%20de%20mais%20infomações@." target="_bla'1nk">
                <img className="bntWhatsFixo" src={IconWhats} alt="icone whats" />
            </a>
        </div>
    )
}
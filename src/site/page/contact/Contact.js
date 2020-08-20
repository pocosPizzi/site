import React from 'react';
import { MdEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import './contact.css';

export default function Contact(){
    return (
        <section id="contato" className="contactSite">
            <div className="contentGeral">
                <div className="contactContent">
                   
                    <strong>
                        <h1>
                            Email:
                        </h1>
                    
                        <p >
                            <MdEmail style={{margin:"-0.5%", marginRight:"2%"}}/>    pocosartesianospizzi@gmail.com
                        </p>
                        
                        <h1>
                            Whats:
                        </h1>
                    
                        <p>
                            <AiOutlineWhatsApp style={{margin:"-0.5%", marginRight:"2%"}}/> (054) 99901-9720
                        </p>
                        <h1>
                            Whats:
                        </h1>
                    
                        <p>
                            <AiOutlineWhatsApp style={{margin:"-0.5%", marginRight:"2%"}}/> (054) 99997-3244
                        </p>
                    </strong>
                </div>
                <div className="contactContent">
                        <h1>
                           Nossa localização:
                        </h1>   
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.533736250088!2d-53.002394985198734!3d-27.731678982781844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fcbe8720c403ad%3A0xa99fa88212259ccc!2sR.%20%C3%8Dtalo%20Ferlauto%2C%20151%2C%20Constantina%20-%20RS%2C%2099680-000!5e0!3m2!1spt-BR!2sbr!4v1597628644965!5m2!1spt-BR!2sbr" className="map"  aria-hidden="false" ></iframe>
       
                </div>
            </div>
            </section>
    )
}
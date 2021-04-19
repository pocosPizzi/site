import React, { useEffect } from 'react';
import ButtonWhats from '../components/buttons/button_whats/ButtonWhats';
import Header from '../components/header/index';
import Parallax from './parallax/Parallax';
import Home from './home/Home';
import QuemSomos from './quem_somos/QuemSomos';
import History from './history/History';
import MissaoVisaoValores from './missao_valores_visao/MissaoVisaoValores';
import ServiceParallax from './servicos_parallax/serviceParallax';
import Servico from './servico/servico';
import Budget from './budget/budget';
import Contact from './contact/Contact';
import Footer from '../components/footer/footer';
import axios from 'axios';

export default function Site() {

    const upService = (event) => {
        axios.get(`https://api-pizzi.herokuapp.com/api/up`, {
        }).then(res => {
        }).catch(error => {
        });

        axios.get(`https://poco-pizzi-back-office.herokuapp.com/wakeup`, {
        }).then(res => {
        }).catch(error => {
        });

    }

    useEffect(() => {
        upService()
    }, [])

    return (
        <>
            <ButtonWhats />
            <Header />
            <Parallax />
            <Home />
            <QuemSomos />
            <History />
            <MissaoVisaoValores />
            <ServiceParallax />
            <Servico />
            <Budget />
            <Contact />
            <Footer />
        </>
    )
}
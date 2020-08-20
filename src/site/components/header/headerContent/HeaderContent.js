import React from 'react';
import './HeaderContent.css';
import Logo from '../../../img/logoPizzi.jpeg';
import ListIcon from '@material-ui/icons/List';
import HeaderContainer from '../headerContainer/HeaderContainer';
import ButtonHeader from '../buttonHeader/ButtonHeader';

export default function HeaderContent(){

    const resetarCheckMenu = () => {
        var elemento = window.document.getElementById("btMenu");
        elemento.checked=false
    }

    return (
        <>
            <HeaderContainer>
                <div className="logo">
                    <img className="simbolLogo" src={Logo} alt="website logo"/>
                </div>
                <div className="nav">
                    <ButtonHeader name="HOME" href="#home"/>
                    <ButtonHeader name="QUEM SOMOS" href="#quemSomos"/>
                    <ButtonHeader name="SERVIÇOS" href="#servicos"/>
                    <ButtonHeader name="ORÇAMENTO" href="#orcamento"/>
                    <ButtonHeader name="CONTATO" href="#contato"/>
                    <input type="checkbox" id="btMenu"></input>
                    <label htmlFor="btMenu"  className="menuHamburguer">
                        <ListIcon style={{fontSize: "3.0rem"}}/>
                    </label>
                    <ul className="navResposinvo">
                        <li className="liNav">
                            <a className="linkNav" href="#home" >
                                <label className="labelName" onClick={resetarCheckMenu}>
                                    HOME
                                </label>
                            </a>
                        </li>
                        <li className="liNav">
                            <a className="linkNav" href="#quemSomos">
                                <label className="labelName" onClick={resetarCheckMenu}>
                                    QUEM SOMOS
                                </label>
                            </a>
                        </li>
                        <li className="liNav">
                            <a className="linkNav" href="#servicos">
                                <label className="labelName" onClick={resetarCheckMenu}>
                                    SERVIÇOS
                                </label>
                            </a>
                        </li>
                        <li className="liNav">
                            <a className="linkNav" href="#orcamento">
                                <label className="labelName" onClick={resetarCheckMenu}>
                                    ORÇAMENTO
                                </label>
                            </a>
                        </li>
                        <li className="liNav">
                            <a className="linkNav" href="#contato">
                                <label className="labelName" onClick={resetarCheckMenu}>
                                    CONTATO
                                </label>
                            </a>
                        </li>
                    </ul>
                </div>
            </HeaderContainer>
        </>
    )
}
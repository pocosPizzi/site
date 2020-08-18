import React from 'react';
import {TextField, Button} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import './budget.css';

export default function Budget(){
    return (
        <form id="orcamento">
            <h1>Orçamento</h1>
            <div className="fragmentBudget">
                <TextField
                    required
                    id="outlined-secondary"
                    label="Nome"
                    variant="outlined"
                    className="textOrcamento"
                />
                <TextField
                    required
                    id="outlined-secondary"
                    label="Email"
                    variant="outlined"
                    className="textOrcamento"
                />

            </div >
            <div className="fragmentBudget">
                <TextField
                    id="outlined-secondary"
                    label="Telefone"
                    type="number"
                    variant="outlined"
                    className="textOrcamento"
                />
            
            <TextField
                    required
                    id="outlined-secondary"
                    label="Cidade"
                    variant="outlined"
                    className="textOrcamento"
                />
                <TextField
                    required
                    id="outlined-secondary"
                    label="UF"
                    variant="outlined"
                    className="textOrcamento"
                />
            </div>
            <div className="fragmentBudget">
                <TextField
                    required
                    id="outlined-secondary"
                    label="Menssagem"
                    multiline
                    rows={5}
                    variant="outlined"
                    className="textOrcamento"
                />
               
            </div>
            
            <Button
                    variant="contained"
                    color="primary"
                    className="buttonOrcamento"
               >
                Enviar
            </Button>
        </form>
    )
}
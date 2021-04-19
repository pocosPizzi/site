import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './budget.css';

export default function Budget() {

    const [budget, setBudget] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const resetForm = () => {
        setBudget({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    }

    const handleChange = (evt) => {
        const value = evt.target.value;
        setBudget({
            ...budget,
            [evt.target.name]: value
        });
    }

    const budgetPost = (event) => {

        event.preventDefault()

        if (budget.message === "") {
            swal("Atenção", "Verfique o campo de mensagem.")
            return
        }
        if (budget.email === "") {
            swal("Atenção", "Verfique o campo de email.")
            return
        }
        if (budget.name === "") {
            swal("Atenção", "Verfique o campo de nome.")
            return
        }
        if (budget.phone === "") {
            swal("Atenção", "Verfique o campo de telefone.")
            return
        }

        axios.post(`https://api-pizzi.herokuapp.com/api/email`, budget, {
        }).then(res => {
            setBudget(res.data)
            swal("Orçamento enviado.")
        }).catch(error => {
            swal("Não foi possível enviar orçamento, tente de novo mais tarde.")
        });
        resetForm();
    }

    return (
        <form id="orcamento">
            <h1>Orçamento</h1>
            <div className="contentBudget">
                <label className="labelBudget" >Nome*</label>
                <input type="text" name="name" value={budget.name} className="inputBudget" onChange={handleChange} />
            </div>
            <div className="contentBudget">
                <label className="labelBudget">Email*</label>
                <input type="text" name="email" value={budget.email} className="inputBudget" onChange={handleChange} />
            </div>
            <div className="contentBudget">
                <label className="labelBudget">Telefone*</label>
                <input type="text" name="phone" value={budget.phone} className="inputBudget" onChange={handleChange} />
            </div>
            <div className="contentBudget">
                <label className="labelBudget">Messagen*</label>
                <textarea className="inputBudget" name="message" value={budget.message} onChange={handleChange} rows="5"></textarea>
            </div>
            <button className="buttonBudget" onClick={budgetPost}>
                Enviar
            </button>
        </form>
    )
}
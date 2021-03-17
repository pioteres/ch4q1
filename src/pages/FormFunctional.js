import React, { useState } from 'react';

function FormFunctional() {
    const [isSubmited, setIsSubmited ] = useState();
    const [billValue, setBillValue ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmited(!isSubmited);
        setBillValue(Math.round((e.target.netto.value * e.target.tip.value * e.target.vat.value + Number.EPSILON)*100 ) / 100);
    }
    const handleNewBillClick = () => {
        setIsSubmited(!isSubmited);
    }
    return (
        <div>
            {!isSubmited
            ? <form onSubmit={handleSubmit}>
                <input type="number" name="netto" placeholder="Podaj kwotę netto" />
                <select name="tip">
                    <option value="1">0%</option>
                    <option value="1.05">5%</option>
                    <option value="1.1">10%</option>
                    <option value="1.15">15%</option>
                    <option value="1.2">20%</option>
                </select>
                <select name="vat">
                    <option value="1.05">5%</option>
                    <option value="1.08">8%</option>
                    <option value="1.23">23%</option>
                </select>
                <button type="submit">Przelicz</button>
            </form>
            : <div><p>Do zapłaty: ${billValue} </p><button onClick={handleNewBillClick}>Nowy rachunek</button></div>
            }
        </div>
    );
}

export default FormFunctional;
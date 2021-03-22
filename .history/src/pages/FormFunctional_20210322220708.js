import React, { useState } from 'react';

function FormFunctional() {
  const [isSubmitted, setIsSubmitted] = useState();
  const [billValue, setBillValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
    setBillValue(
      Math.round(
        (e.target.netto.value * e.target.tip.value * e.target.vat.value +
          Number.EPSILON) *
          100
      ) / 100
    );
  };
  const handleNewBillClick = () => {
    setIsSubmitted(!isSubmitted);
  };
  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <input type="number" name="netto" placeholder="Podaj kwotę netto" />
          </div>
          <div>
            <label for="name">Napiwek</label>
            <select name="tip">
              <option value="1">0%</option>
              <option value="1.05">5%</option>
              <option value="1.1">10%</option>
              <option value="1.15">15%</option>
              <option value="1.2">20%</option>
            </select>
          </div>
          <div>
            <label for="vat">Stawka VAT</label>
            <select name="vat">
              <option value="1.05">5%</option>
              <option value="1.08">8%</option>
              <option value="1.23">23%</option>
            </select>
          </div>
          <div>
            <button type="submit">Przelicz</button>
          </div>
        </form>
      ) : (
        <div>
          <p>Do zapłaty: ${billValue} </p>
          <button onClick={handleNewBillClick}>Nowy rachunek</button>
        </div>
      )}
    </div>
  );
}

export default FormFunctional;

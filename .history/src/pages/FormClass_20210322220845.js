import React from 'react';

class FormClass extends React.Component {
    state = {
        isSubmitted: false,
        billValue: 0
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ billValue: Math.round((e.target.netto.value * e.target.tip.value * e.target.vat.value + Number.EPSILON)*100 ) / 100});
        this.setState({isSubmitted: !this.state.isSubmitted});
    }
    handleNewBillClick = (e) => {
        this.setState({isSubmitted: !this.state.isSubmitted});

    }
    render() {
        return (
            <div>
                {!this.state.isSubmitted
                ? <form onSubmit={this.handleSubmit}  >
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
                :   <div><p>Do zapłaty: ${this.state.billValue} </p><button onClick={this.handleNewBillClick}>Nowy rachunek</button></div>
                }
            </div>
        )

    }
}

export default FormClass;
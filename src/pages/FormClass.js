import React from 'react';

class FormClass extends React.Component {
    state = {
        isSubmited: false,
        billValue: 0
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ billValue: Math.round((e.target.netto.value * e.target.tip.value * e.target.vat.value + Number.EPSILON)*100 ) / 100});
        this.setState({isSubmited: !this.state.isSubmited});
    }
    handleNewBillClick = (e) => {
        this.setState({isSubmited: !this.state.isSubmited});

    }
    render() {
        return (
            <div>
                {!this.state.isSubmited
                ? <form onSubmit={this.handleSubmit}>
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
                :   <div><p>Do zapłaty: ${this.state.billValue} </p><button onClick={this.handleNewBillClick}>Nowy rachunek</button></div>
                }
            </div>
        )

    }
}

export default FormClass;
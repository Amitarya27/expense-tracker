import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExprence = () => {

    const { transactions } = useContext(GlobalContext);

    // const profit = transactions.map(trsn = trsn.amount < 0 :)

    // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus"> +$ {
                    transactions.map(trsn => { if (trsn.amount > 0) { return trsn.amount }else{return 0} }).reduce((acc, item) => (acc += item), 0).toFixed(2)
                } </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-plus" className="money minus"> -${
                    transactions.map(trsn => { if (trsn.amount < 0) { return trsn.amount }else{return 0} }).reduce((acc, item) => (acc += item), 0).toFixed(2)
                } </p>
            </div>
        </div>
    );
}

export default IncomeExprence;

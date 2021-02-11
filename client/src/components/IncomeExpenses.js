import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    let expenses = 0;
    let income = 0;

    if (transactions.length) {
        income = transactions.map(transaction => {
            if (transaction.amount > 0) {
                return transaction.amount;
            } else {
                expenses += transaction.amount;
                return 0;
            }
        }).reduce((total, item) => total += item).toFixed(2);
    }

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">${numberWithCommas(expenses)}</p>
            </div>
        </div>
    )
}

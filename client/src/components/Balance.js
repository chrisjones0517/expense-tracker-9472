import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    let amounts;
    let total = 0;

    if (transactions.length) {
        amounts = transactions.map(transaction => transaction.amount);
        total = amounts.reduce((total, item) => total += item).toFixed(2);
    }

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${numberWithCommas(total)}</h1>
        </>
    )
}

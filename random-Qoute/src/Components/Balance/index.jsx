import React, {useContext} from "react";
import './styles.css';
import { GlobalContext } from "../../Context/GlobalState";

export const Balance = () => {

    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        
        <>
        <h4 className="title">Your Balance</h4>
        <h1 id="balance"> ${total}</h1>
        </>
        
    )
}
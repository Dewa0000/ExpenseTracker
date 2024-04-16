import React, { useContext } from "react";
import './styles.css';
import { Transaction } from "../Transaction";
import { GlobalContext } from "../../Context/GlobalState";

export const TransactionList = () => {
     
    const {transactions} = useContext(GlobalContext);

    

    return (
        
        <>
        <h3 className="history">History</h3>
        <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction = {transaction}/>))}
        </ul>
        </>
    )
}
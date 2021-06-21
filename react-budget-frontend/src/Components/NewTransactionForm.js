import { useState } from "react";
import { withRouter } from "react-router-dom";

import "./NewTransactionForm.css"

function NewTransactionForm({ addTransaction, history }) {
    const [transaction, setTransaction] = useState({
        from: "", 
        date: "", 
        name: "", 
        amount: 0 ,
    })

    const handleTextChange = (e) => {
        setTransaction({ ...transaction, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction(transaction);
        history.push("/transactions"); 
    }

    return(
        <div className="newForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="from">From:</label>&nbsp; &nbsp; &nbsp;
                <input id="from" value={transaction.from} type="text" onChange={handleTextChange} placeholder="Transaction Location" required />
                <br></br><label htmlFor="date">Date:</label>&nbsp; &nbsp; &nbsp;
                <input id="date" value={transaction.date} type="text" onChange={handleTextChange} placeholder="Month, Day" required />
                <br></br><label htmlFor="name">Name:</label>&nbsp; &nbsp; &nbsp;
                <input id="name" value={transaction.name} type="text" onChange={handleTextChange} placeholder="Transaction Description" required />
                <br></br><label htmlFor="amount">Amount:</label>&nbsp; &nbsp; &nbsp;
                <input id="amount" value={transaction.amount} type="text" onChange={handleTextChange} placeholder="Transaction Amount" required />
                <br></br>
                <input type="submit" id="submit" value="Add Transaction Record" />
            </form>
        </div>
    )
}

export default withRouter(NewTransactionForm);
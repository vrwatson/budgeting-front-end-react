import NewTransactionForm from "../Components/NewTransactionForm";

export default function New({ addTransaction, history }) {
    return (
        <div className="New">
            <h2>New Transaction Entry Form</h2>
            <NewTransactionForm addTransaction={addTransaction} history={history}/>
        </div>
    );
}

import Transactions from "../Components/Transactions";

export default function Index({ transactions, total  }) {
    return (
        <div className="Index">
            <h3>Bank Account Total: ${total.toFixed(2).toLocaleString()}</h3>
            <Transactions transactions={transactions} />
        </div>
    );
};
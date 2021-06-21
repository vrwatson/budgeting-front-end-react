import Transaction from "./Transaction";

import "./Transactions.css";

export default function Transactions({ transactions, total }) {
  return (
    <div className="Transactions">
      <section className="transactionsList">
        {transactions.map((transaction, index) => {
          return (
            <Transaction key={index} transaction={transaction} index={index} />
          );
        })}
      </section>
    </div>
  );
}

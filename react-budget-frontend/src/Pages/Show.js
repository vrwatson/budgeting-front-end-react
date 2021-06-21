import TransactionDetails from "../Components/TransactionDetails";

export default function Show({ transactions }) {
    console.log(transactions);
    return(
        <div className="Transactions">
             <section>
                 <TransactionDetails transactions={ transactions } />
             </section>
        </div>
    )
}
import TransactionDetails from "../Components/TransactionDetails";

export default function Show({ transactions }) {
    return(
        <div className="Transactions">
             <section>
                 <TransactionDetails transactions={ transactions } />
             </section>
        </div>
    )
}
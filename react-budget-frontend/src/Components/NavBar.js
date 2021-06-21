import { Link } from "react-router-dom";

import "./NavBar.css"

export default function NavBar() {
    return(
        <nav className="navBar">
            <h1 className="toTransactions">
                <Link  to="/transactions">Transactions</Link>
            </h1>
            <button className="toNewTransaction">
                <Link  to="/transactions/new">New Transaction</Link>
            </button>
        </nav>
    );
}
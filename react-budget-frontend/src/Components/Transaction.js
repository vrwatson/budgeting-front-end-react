import { Link } from "react-router-dom";

export default function Transaction({ transaction, index }) {
  return (
    <tr>
      <td className="tranDate">{transaction.date}</td>&nbsp; &nbsp;
      <td className="tranName">
        <Link to={`/transactions/${index}`}>{transaction.name}</Link>
      </td>
      &nbsp; &nbsp;
      <td className="tranAmount">{transaction.amount}</td>
    </tr>
  );
}

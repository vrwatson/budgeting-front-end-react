import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

export default function TransactionDetails() {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();

  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      setTransaction(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div className="selectedTransaction">
      <h4>Index #{index} Detailed Record: </h4>
      <tr>
        <td>Date:</td>&nbsp; &nbsp;
        <td>{transaction.date}</td>&nbsp; &nbsp;
      </tr>
      <tr>
        <td>From:</td>&nbsp; &nbsp;
        <td>{transaction.from}</td>&nbsp; &nbsp;
      </tr>
      <tr>
        <td>Description:</td>&nbsp; &nbsp;
        <td>{transaction.name}</td>&nbsp; &nbsp;
      </tr>
      <tr>
        <td>Amount:</td>&nbsp; &nbsp;
        <td>$ {transaction.amount}</td>&nbsp; &nbsp;
      </tr>
    </div>
  );
}

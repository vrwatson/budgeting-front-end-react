import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./Components/NavBar";

import "./App.css";

import Home from "./Pages/Home";
import New from "./Pages/New";
import Index from "./Pages/Index";
import Show from "./Pages/Show";

import { apiURL } from "./util/apiURL";
const API = apiURL();


function App() {
const [transactions, setTransactions] = useState([]);
// const [total, setTotal] = useState(0);

const addTransaction = async (newTransaction) => {
  let res;
  try {
    res = await axios.post(`${API}/transactions/`, newTransaction);
    setTransactions(prevTransactions => [...prevTransactions, res.data])
  } catch (error) {
    console.log(error)
  }
};


const fetchTransactions = async () => {
  try {
    const res = await axios.get(`${API}/transactions`)
    console.log(res.data);
    setTransactions(res.data)
    totalCalculation();
  } catch (error) {
    console.log(error);
  }
};



const totalCalculation = () => {
  let total = 0;
  transactions.forEach((t) => {
    total += Number(t.amount) 
  })
  console.log(total);
  return total;
}


useEffect(() => {
  fetchTransactions();
  totalCalculation();
}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/transactions">
              <Index transactions={transactions} 
              total={totalCalculation()}
              />
            </Route>
            <Route path="/transactions/new">
              <New addTransaction={addTransaction} />
            </Route>
            <Route exact path="/transactions/:index">
            <Show transactions={transactions} />
            </Route>

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

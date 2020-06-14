import React, { useContext } from "react";
import SimpleCard from "./Card";
import "./Balance.css";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div>
      <div className="left">
        <p>YOUR BALANCE</p>
        <h1>${total}</h1>
      </div>
      <div>
        <SimpleCard income={income} expense={expense} />
      </div>
    </div>
  );
}

export default Balance;

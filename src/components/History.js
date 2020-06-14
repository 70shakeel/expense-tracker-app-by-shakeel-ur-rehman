import React, { useContext } from "react";
import "./History.css";
import SimpleCard from "./CardH";
import { GlobalContext } from "../context/GlobalState";

function History() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="history">
      <h4>History</h4>
      <hr />
      {transactions.map((transaction) => (
        <SimpleCard transaction={transaction} key={transaction.id} />
      ))}
    </div>
  );
}

export default History;

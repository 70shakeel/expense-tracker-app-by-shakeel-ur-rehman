import React, { useState, useContext } from "react";
import "./NewTransaction.css";
import { GlobalContext } from "../context/GlobalState";

function NewTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
      setText: "",
      setAmount: 0,
    };
    addTransaction(newTransaction);
  };

  return (
    <div className="newTransaction">
      <p>Add New Transaction</p>
      <hr />
      <div className="form-1">
        <form onSubmit={onSubmit}>
          <label htmlFor="type">Title</label>
          <br />
          <input
            type="text"
            placeholder="Type the type of transaction..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <label htmlFor="amount">Amount</label>
          <p>(- for expense + for income)</p>
          <input
            type="number"
            placeholder="Type the amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <button>Add Transaction</button>
        </form>
      </div>
    </div>
  );
}

export default NewTransaction;

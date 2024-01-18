import React, { useState } from "react";

import "./ItemForm.css";

// A form for entering the transactions
const ItemForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [isIncome, setIsIncome] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    setErrorMessage("");
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
    setErrorMessage("");
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    setErrorMessage("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitle.trim() === "" ||
      enteredAmount.trim() === "" ||
      enteredDate.trim() === "" ||
      isIncome === ""
    ) {
      setErrorMessage("Please enter some valid input.");
      return;
    }

    const newItem = {
      id: Math.random().toString(),
      date: enteredDate,
      title: enteredTitle,
      amount: +enteredAmount,
      income: isIncome,
    };

    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
    setIsIncome("");
    setErrorMessage("");

    props.onAddItemHandler(newItem);
  };

  return (
    <div>
      <form className="expense-form" onSubmit={submitHandler}>
        <label htmlFor="date">Date</label>
        <input
          className="expense-input-date"
          id="date"
          type="date"
          placeholder="Enter date..."
          value={enteredDate}
          onChange={dateHandler}
        ></input>
        <label htmlFor="title">Title</label>
        <input
          className="expense-input-date"
          id="title"
          type="text"
          placeholder="Enter title..."
          value={enteredTitle}
          onChange={titleHandler}
        ></input>
        <label htmlFor="amount">Amount</label>
        <input
          className="expense-input-date"
          id="amount"
          type="number"
          placeholder="Enter amount..."
          value={enteredAmount}
          onChange={amountHandler}
        ></input>
        <div className={["radio-buttons"]}>
          <div>
            <input
              className="expense-input-date"
              id="income"
              type="radio"
              name="item-type"
              checked={isIncome === true}
              onChange={() => setIsIncome(true)}
            ></input>
            <label htmlFor="income">Income</label>
          </div>
          <div>
            <input
              id="expense"
              type="radio"
              name="item-type"
              checked={isIncome === false}
              onChange={() => setIsIncome(false)}
            ></input>
            <label htmlFor="expense">Expense</label>
          </div>
        </div>
        <button className="expense-btn">Add transaction</button>
        {errorMessage && (
          <div className="expense-error-message">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default ItemForm;

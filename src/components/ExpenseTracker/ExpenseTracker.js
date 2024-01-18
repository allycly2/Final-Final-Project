import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "../ExpenseTracker/expenses/Header";
import Expense from "../ExpenseTracker/expenses/Expense";
import Section from "../ExpenseTracker/UI/Section";
import ItemList from "../ExpenseTracker/items/ItemList";
import ItemForm from "../ExpenseTracker/items/ItemForm";
import Sidebar from "../NavBar/Sidebar";
import "./ExpenseTracker.css";
import backgroundImage from "../Image/bkimage2.png";

function ExpenseTracker() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("expenseData");
    if (storedData) {
      setItems(JSON.parse(storedData));
    }
  }, []);

  const onAddItemHandler = (enteredItem) => {
    const newItem = {
      id: uuidv4(),
      ...enteredItem,
    };

    setItems((prevItems) => {
      const updatedItems = [newItem, ...prevItems];
      localStorage.setItem("expenseData", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const deleteItemHandler = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("expenseData", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="expense-main-container" style={styles}>
      <div className="navigation">
        <Sidebar />
      </div>
      <div className="expense-content-container">
        <div className="expense-header">
          <div className="expense-caption">
            <h1 className="expense-h1">Expense Tracker</h1>
            <h4 className="expense-h4">
              Give a clear picture of your financial life.
            </h4>
          </div>
        </div>
        <div className="expense-content">
          <div className="expense-section-one">
            <div className="expense-item-one">
              <div className="balance">
                <Header items={items} />
              </div>
              <div className="expense-income">
                <Expense items={items} />
              </div>
            </div>

            <div className="expense-item-two">
              <Section>Add new transaction</Section>
              <ItemForm onAddItemHandler={onAddItemHandler} />
            </div>
          </div>
          <div className="expense-item-three">
            <Section>Record</Section>
            {items.length === 0 && <p>No record found. Try adding one!</p>}
            <ItemList onDeleteItem={deleteItemHandler} items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;

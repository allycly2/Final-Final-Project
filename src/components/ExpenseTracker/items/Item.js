import React, { useState } from "react";
import classes from "./Item.module.css";

const Item = ({ item, onDeleteItem }) => {
  const handleDelete = () => {
    onDeleteItem(item.id);
  };

  const [deleteMode, setDeleteMode] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const deleteHandler = () => {
    onDeleteItem(item.id);
  };

  const deleteModeHandler = () => {
    setDeleteMode(!deleteMode);
  };

  const toggleDateHandler = () => {
    setShowDate(!showDate);
  };

  const search_value = /\B(?=(\d{3})+(?!\d))/g;

  return (
    <li onClick={deleteModeHandler}>
      <div className={`${item.income ? classes.income : classes.expense}`}>
        {deleteMode && (
          <button className={classes.delete} onClick={deleteHandler}>
            x
          </button>
        )}
        {showDate && <div className={classes.date}>{item.date}</div>}
        <div className={classes.date}>{item.date}</div>
        <div className={classes.title}>{item.title}</div>
        <div className={classes.amount}>
          {`${item.income ? "+" : "-"}${item.amount
            .toFixed(2)
            .toString()
            .replace(search_value, ",")}`}
        </div>
      </div>
    </li>
  );
};

export default Item;

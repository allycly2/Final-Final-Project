import React from "react";
import classes from "./ItemList.module.css";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <ul className={classes.items}>
      {props.items.map((item) => (
        <Item onDeleteItem={props.onDeleteItem} key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;

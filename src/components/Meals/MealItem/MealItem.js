import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealsItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`; //This will fix the decimal to 2 point.
  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;

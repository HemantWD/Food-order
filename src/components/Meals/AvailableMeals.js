import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest Fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Grilled Sandwich",
    description: "Made with schezwan sauce.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Indian Style with spices",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Health...Green",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

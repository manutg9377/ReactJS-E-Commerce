import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      setError(null);
      try {
        const response = await fetch(
          "https://react-http-api-53684-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        );
        if (!response.ok) {
          throw new Error("SOMETHING IS WRONG");
        }

        const responseData = await response.json();
        const loadedMeals = [];
        for (let datakey in responseData) {
          loadedMeals.push({
            id: datakey,
            name: responseData[datakey].name,
            description: responseData[datakey].description,
            price: responseData[datakey].price,
          });
        }
        setMeals(loadedMeals);
      } catch (error) {
        setIsLoading(true);
        setError(error.message);
      }
    };
    fetchData();
    // setError(null);
    setIsLoading("");
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        {error && <p>{error}</p>}
        {isLoading && <p>Loading</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;

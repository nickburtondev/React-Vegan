import classes from './AvailableMeals.module.css';
import Card from './Card';
import MealItem from './MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Black Bean Burger',
    description: 'Our signature burger, served atop multi-grain toast',
    price: 15.99,
  },
  {
    id: 'm2',
    name: 'Falafel',
    description: 'A Levantine specialty, drizzled with tahini sauce',
    price: 10.5,
  },
  {
    id: 'm3',
    name: 'Garden Salad',
    description: 'Freshly picked, served with rich balsamic vinaigrette',
    price: 11.99,
  },
  {
    id: 'm4',
    name: 'Wild Rice Medley',
    description: 'A wholesome vegetable blend',
    price: 14.5,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;

import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Plant-Based Cuisine, Delivered To You</h2>
      <p>
        A plant-based lifestyle is our passion, which we hope to share with you.
      </p>
      <p>
        Choose your favorite plant-based dishes, made from fresh ingredients,
        delivered right to your door.
      </p>
    </section>
  );
};

export default MealsSummary;

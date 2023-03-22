import { Fragment } from 'react';
import mealsImage from './Meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Vegan</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Black Bean Burger" />
      </div>
    </Fragment>
  );
};
export default Header;

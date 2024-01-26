import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store';

const CartItem = (props) => {
  const { title, quantity, price } = props.item;
  const dispatch = useDispatch();
  const total = quantity*price
  const addItemHandler= () => {
    dispatch(cartActions.incrementCartItem(title))
  }
  const removeItemHandler = () => {
    dispatch(cartActions.decrementCartItem(title))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

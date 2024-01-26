import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.items
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.title}
            item={{ title: item.title, quantity: item.quantity, total: 18, price: 6 }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
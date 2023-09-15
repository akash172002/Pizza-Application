/* eslint-disable react/prop-types */
import { decreaseItemQuantity, increaseItemQuantity } from "../cart/cartSlice";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";

const UpdateItem = ({ pizzaId, currentQunatity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQunatity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItem;

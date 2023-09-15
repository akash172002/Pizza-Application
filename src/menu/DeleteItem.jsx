/* eslint-disable react/prop-types */
import { deleteItem } from "../cart/cartSlice";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteItem;

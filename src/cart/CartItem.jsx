/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

import { formatCurrency } from "../utils/helpers";
import { getCurrentQuantity } from "./cartSlice";
import DeleteItem from "../menu/DeleteItem";
import UpdateItem from "../menu/UpdateItem";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQty = useSelector(getCurrentQuantity(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItem pizzaId={pizzaId} currentQunatity={currentQty} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;

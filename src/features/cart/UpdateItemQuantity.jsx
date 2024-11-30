import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantiity, increaseItemQuantiity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantiity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantiity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
export default UpdateItemQuantity;
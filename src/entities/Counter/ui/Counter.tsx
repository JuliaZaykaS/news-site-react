// import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
// import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { getCounterValue, useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions, useCounterActions } from "../model/slice/counterSlice";

// interface CounterProps {}

// export const Counter = (props: CounterProps) => {
export const Counter = () => {
  //   const {} = props;
  const dispatch = useDispatch();
  // const counterValue = useSelector(getCounterValue);
  const counterValue = useCounterValue();
  const { t } = useTranslation();

  const {decrement, increment}= useCounterActions()

  // const increment = () => {
  //   dispatch(counterActions.increment());
  // };
  // const decrement = () => {
  //   dispatch(counterActions.decrement());
  // };
  const handleIncrement = () => {
   increment()
  };
  const handleDecrement = () => {
    decrement()
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      {/* <Button onClick={increment} data-testid="increment-btn"> */}
      <Button onClick={handleIncrement} data-testid="increment-btn">
        {t("прибавить")}
      </Button>
      {/* <Button onClick={decrement} data-testid="decrement-btn"> */}
      <Button onClick={handleDecrement} data-testid="decrement-btn">
        {t("убавить")}
      </Button>
    </div>
  );
};

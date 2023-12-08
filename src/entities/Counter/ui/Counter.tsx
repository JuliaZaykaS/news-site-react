// import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
// import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

// interface CounterProps {}

// export const Counter = (props: CounterProps) => {
export const Counter = () => {
  //   const {} = props;
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={increment} data-testid="increment-btn">
        {t("прибавить")}
      </Button>
      <Button onClick={decrement} data-testid="decrement-btn">
        {t("убавить")}
      </Button>
    </div>
  );
};

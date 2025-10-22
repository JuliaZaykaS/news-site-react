
import { useTranslation } from 'react-i18next';
// import { useDispatch } from 'react-redux';

import { Button } from '@/shared/ui/deprecated/Button';
import {
    useCounterValue,
} from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();

    const { decrement, increment } = useCounterActions();

    // // const increment = () => {
    // //   dispatch(counterActions.increment());
    // // };
    // // const decrement = () => {
    // //   dispatch(counterActions.decrement());
    // // };
    const handleIncrement = () => {
        increment();
    };
    const handleDecrement = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                {t('прибавить')}
            </Button>
            <Button onClick={handleDecrement} data-testid="decrement-btn">
                {t('убавить')}
            </Button>
        </div>
    );
};

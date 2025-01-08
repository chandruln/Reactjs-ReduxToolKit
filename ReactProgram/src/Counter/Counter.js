import {useSelector, useDispatch} from 'react-redux';
import { decreament, increament, increamentByAmount, reset, selectCount } from './CounterSlice';
import { useState } from 'react';

const Counter = () => {

    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const [increamentAmount, setIncreamentAmount] = useState(0);

    const addValue = Number(increamentAmount) || 0;

    const resetAll = () => {
        setIncreamentAmount(0);
        dispatch(reset());
    }
  
  return (
    <section>
        <p>Counter : {count}</p>
        <div>
            <button onClick={() => dispatch(increament())}>+</button>
            <button onClick={() => dispatch(decreament())}>-</button>  
        </div>

        <input type='text' value={increamentAmount} onChange={(e) => setIncreamentAmount(e.target.value)} placeholder='Increment by ..'/>
        <div>
            <button onClick={() => dispatch(increamentByAmount(increamentAmount))}>Add Amount</button>
            <button onClick={() => resetAll()}>Reset</button>  
        </div>

    </section>
  )
}

export default Counter
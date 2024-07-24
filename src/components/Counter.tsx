import React, {useState} from 'react';
import classes from "./Counter.module.scss"
export const Counter = () => {
    const [count, useCount] = useState(0)

    const increment = () => {
        useCount(count + 1)
    }
    const discernment = () => {
        if (count !== 0) {
            useCount(count - 1)
        }
    }
    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button disabled={count === 0} onClick={discernment}>discernment</button>
        </div>
    );
};

export default Counter;

//create a counter component with increment and decrement functions . pass these functions to a child component which has buttons to perfrom the increment and decrement actions . 
//use usecallback to ensure that these functions are not recreate don every render 

import { useCallback, useState ,memo } from "react";

export function Assignement1() {
    const [count,setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(currentCount => currentCount + 1); //we did not do setCOunt(count + 1) coz the setCount no longer depends on count 
    },[]);

    const handleDecrement = useCallback(() => {
        setCount(currentCount => currentCount - 1);
    },[]);

    return (
        <div>
            <p> count : {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    )
}

//see even if we are clicking on one button then the other button is re rendering that is not good coz that is bcoz the counterbuttons has both the buttons inside it that is the child component and it is making it re render .
//so what do we do to stop the child component to re-render ...we use useCallback 
//number 1 is we wrap the child component inside a memo .. what is a memo it stops re rendering of static components
//number 2 is we wrap the functions inside the return div(upar wala) that is handleINcrement and handleDecrement 
//so after doing so we made sure that the child component that is the button will not re render when the count changes 

const CounterButtons = memo(({onIncrement , onDecrement}) => (
    <div>
        <button style={{margin:10}} onClick={onIncrement}>Increment</button>
        <button style={{margin:10}} onClick={onDecrement}>Decrement</button>
    </div>
));
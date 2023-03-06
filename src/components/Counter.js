import React, {useState} from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);

    const onClickButton= ()=>{
        setCount(count+1)
    }
    return <div>
        <button onClick={()=>onClickButton()}>Click me</button>
        <h3>Current Count: {count}</h3>
    </div>
}

export default Counter;
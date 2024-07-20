import { useState,useEffect } from "react";

const  Test = () => {
    
    const [count,setCount] = useState(0)
    useEffect(()=>{
        if(count<11){
            const timerId = setInterval(() => {
                setCount(prevCount=>prevCount+1)
            }, 1000);
            return ()=> clearInterval(timerId)
        }
    },[count])
    
    return (
            <h1>TEst{count}</h1>
        )
}

export default Test
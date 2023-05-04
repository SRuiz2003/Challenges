import { useState } from "react"


const useCounter = (value) => {
    const [counter,setCounter] = useState (value)
    const Increment = () => {
        setCounter(counter + 1)
    }
    const Decrement = () =>{
        setCounter(counter - 1)
    }
    const Reset = () =>{
        setCounter(0)
    }
    return {
        Increment,
        Decrement,
        Reset,
        counter

    }
        
    
}

export default useCounter
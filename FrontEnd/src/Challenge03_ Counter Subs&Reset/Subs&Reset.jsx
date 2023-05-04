import { useState } from "react"

export const SubsReset = ({value}) => {
    const [counter,setCounter] = useState (value)

    const handleAdd = () => {
        setCounter (counter + 1)
    }

    const handleSubstract = () => {
        setCounter (counter - 1)
    }

    const handleReset = () => {
        setCounter (0)
    }

    return (
        <>
            <p> {counter} </p>
            <button onClick={() => handleSubstract() }> -1 </button>
            <button onClick={() => handleReset() }> Reset </button>
            <button onClick={() => handleAdd() }> +1 </button>
        </>
    )
} 


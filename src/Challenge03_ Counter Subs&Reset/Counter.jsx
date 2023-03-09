import useCounter from "../hooks/useCounter(Ch06)"
export const Counter = () => {
    const {Increment,Reset,Decrement,counter} = useCounter(0)
    return (
        <>
            <h1>Click on me</h1>
            <p> {counter} </p>
            <button onClick ={ () => Decrement () }> Decrement </button>
            <button onClick ={ () => Reset () }> Restart </button>
            <button onClick ={ () => Increment() }> Increment </button>
            
        </>
    )

}
import React from "react";
import useCounter from "../hooks/useCounter(Ch06)";
import { useFetch } from "../hooks/useFetch(Ch07)";

export const  BreakingBad =  () => {
    const {Increment,counter} = useCounter(1)
    const {data,isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    console.log("Counter value:",counter)
    console.log("Data value:",data)
    console.log(hasError)

    
   return(
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            {
                isLoading ?(
                    <div className="alert alert-info text center">
                          loading...  
                    </div>
               
                ):(
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{data?.[0]?.quote}</p>
                        <footer className="blockquote-footer">{data[0]?.author}</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={()=> Increment()}>Next Quote</button>
        </>

    ) 

}
import React from "react";
import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer.Jsx";
import { TodoLista } from "./TodoLista";
import { TodoAdd } from "./TodoAdd";
import {useCounter} from "../hooks/useCounter(Ch06)"

const initialState = [{
    id : new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}]

export const TodoApp = () => {
    const [todos,dispatchTodo] = useReducer(TodoReducer,initialState)
    
    const {Increment,Decrement,counter} = useCounter(0)
    
    
    
//const handleNewTodo = (todo) = () => {
//        const action = {
//            type: '[TODO] Add Todo',
//            payload: todo
//        }
//        dispatchTodo(action)
//    }
       
    return(
        <>
  
        <h1> Tareas : {counter}, <small>Pendientes: 2</small></h1>
        <hr/>

         <div>
            <div>
                <TodoLista/>
            </div>
            <div>
                <TodoAdd/>
            </div>
        </div>
        </>
    )
}
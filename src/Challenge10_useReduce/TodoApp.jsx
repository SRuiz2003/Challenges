import React from "react";
import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer.Jsx";
import { TodoLista } from "./TodoLista";
import { TodoAdd } from "./TodoAdd";
const initialState = [{
    id : new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}]

export const TodoApp = () => {
    const [todos,dispatchTodo] = useReducer(TodoReducer,initialState)

    const handleNewTodo = (todo) = () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatchTodo(action)
    }   
    return(
        <>
  
        <h1> TodoApp : 10, <small>Pendientes: 2</small></h1>
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
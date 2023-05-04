export const TodoReducer = (initialState,action) => {
    switch(action.type){
        case '[TODO] Add Todo':
            return [...initialState,action.payload]    
        
        default :
            return initialState;    
    }
}
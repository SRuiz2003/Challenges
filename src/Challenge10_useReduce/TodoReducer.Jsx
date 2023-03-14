export const TodoReducer = (initialState,action) => {
    switch(action.type){
        case 'ABC':
            throw new Error('action not yet implemented')
            
        default :
            return initialState;    
    }
}
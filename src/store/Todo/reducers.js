import { GET_TODO } from "./actions";

const initialState = {
    Todo:""
}

export function Todoeducer(state = initialState, action) {
    switch(action.type){
        case GET_TODO :
            return {
                Todo:action.payload,
            };
        default:
        return state;      
    }
}
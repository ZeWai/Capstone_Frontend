import { GET_CLIENT_INFO } from "./actions";

const initialState = {
    Cinfo:["as"]
}

export function FraminfoReducer(state = initialState, action) {
    switch(action.type){
        case GET_CLIENT_INFO:
            return {
                Cinfo:action.payload,
            };
        default:
        return state;      
    }
}
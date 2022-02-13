import { GET_CLIENTLIST } from "./actions";

const initialState = {
    ClientList: ""
}

export function clientListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CLIENTLIST:
            return {
                ClientList: action.data,
            };
        default:
            return state;
    }
}
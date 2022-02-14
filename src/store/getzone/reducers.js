import { GET_CLIENT_ZONE } from "./actions";

const initialState = {
    clientZone: ""
}

export function zoneReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CLIENT_ZONE:
            return {
                clientZone: action.payload,
            };
        default:
            return state;
    }
}
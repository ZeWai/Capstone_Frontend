import {
    GET_CLIENT_NAME,
    GET_USER,
}
    from "./actions";
const initialState = {
    id: localStorage.getItem("LoggedInToken") != null,
    name: '',
    clientNames: ""
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                id: state.id,
                clientNames: state.clientNames,
                name: action.name,
            };
        case GET_CLIENT_NAME:
            return {
                id: state.id,
                name: state.name,
                clientNames: action.name
            }
        default:
            return state;
    }
}
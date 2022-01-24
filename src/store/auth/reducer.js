import { LOGIN, LOGOUT } from "./action";

const initialState = {
    auth: false || localStorage.getItem("LoggedInToken") != null
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, { auth: true });
        case LOGOUT:
            return Object.assign({}, state, { auth: false });
        default:
            return state;
    }
}
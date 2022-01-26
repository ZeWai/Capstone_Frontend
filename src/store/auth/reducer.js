import { ADMIN_LOGIN, CLIENT_LOGIN, FARMER_LOGIN, LOGOUT } from "./action";

const initialState = {
    auth: false || localStorage.getItem("LoggedInToken") != null,
    role: null || 'admin' || 'client' || 'farmer'
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case ADMIN_LOGIN:
            return Object.assign({}, state, { auth: true, role: 'admin' });
        case CLIENT_LOGIN:
            return Object.assign({}, state, { auth: true, role: 'client' });
        case FARMER_LOGIN:
            return Object.assign({}, state, { auth: true, role: 'farmer' });
        case LOGOUT:
            return Object.assign({}, state, { auth: false, role: null });
        default:
            return state;
    }
}
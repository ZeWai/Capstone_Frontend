import { ADMIN_LOGIN, CLIENT_LOGIN, FARMER_LOGIN, LOGOUT, FAIL_LOGIN } from "./action";

const initialState = {
    auth: false || localStorage.getItem("LoggedInToken") != null,
    role: null || 'admin' || 'client' || 'farmer',
    Msg:[]
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case ADMIN_LOGIN:
            return Object.assign({}, state, { auth: true, role: 'admin' , Msg:[] });
        case CLIENT_LOGIN:
            return Object.assign({}, state, { auth: true, role: 'client' , Msg:[]});
        case FARMER_LOGIN:
            return Object.assign({}, state, { auth: true, role: 'farmer' , Msg:[]});
        case LOGOUT:
            return Object.assign({}, state, { auth: false, role: null , Msg:[]});
        case FAIL_LOGIN:
            return Object.assign({}, state, { auth: false, role: null , Msg:["The username or password is not matched"]});
        default:
            return state;
    }
}
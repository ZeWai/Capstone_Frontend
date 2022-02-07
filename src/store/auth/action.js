import axios from "axios"
import jwt_decode from "jwt-decode";
export const ADMIN_LOGIN = 'ADMIN_LOGIN';
export const CLIENT_LOGIN = 'CLIENT_LOGIN';
export const FARMER_LOGIN = 'FARMER_LOGIN';
export const LOGOUT = 'LOGOUT';
export const FAIL_LOGIN="FAIL_LOGIN";

export const loginUserThunk = (username, password) => {
    return (dispatch) => {
        axios
            .post(`${process.env.REACT_APP_API_SERVER}/api/login`, {
                username, password
            })
            .then((res) => {
                    if (jwt_decode(res.data).role === 'admin') {
                        localStorage.setItem("LoggedInToken", res.data);
                        dispatch({ type: ADMIN_LOGIN })
                    } else if (jwt_decode(res.data).role === 'client') {
                        localStorage.setItem("LoggedInToken", res.data);
                        dispatch({ type: CLIENT_LOGIN })
                    } else if (jwt_decode(res.data).role === 'farmer') {
                        localStorage.setItem("LoggedInToken", res.data);
                        dispatch({ type: FARMER_LOGIN })
                    }            
            })
            .catch((res)=> {
                dispatch({type: FAIL_LOGIN }) // Action when fail to login (not finish)
                //
            })
    }
}

export const signupUserThunk = (username, password) => {   //  login will perform after signup is done
    return (dispatch) => {
        axios
            .post(`${process.env.REACT_APP_API_SERVER}/api/signup`, {
                username, password
            })
            .then((res) => {
                console.log('Username has been used') // Action when fila to signup (not finish)
            })
    }
}

export const logoutThunk = () => (dispatch) => {
    localStorage.removeItem("LoggedInToken");
    dispatch({ type: LOGOUT })
}
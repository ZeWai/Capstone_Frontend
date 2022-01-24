import axios from "axios"
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginUserThunk = (username, password) => {
    return (dispatch) => {
        axios
            .post(`${process.env.REACT_APP_API_SERVER}/api/login`, {
                username, password
            })
            .then((res) => {
                if (res.data === null) {
                    console.log("User / password incorrect")  // Action when fila to login (not finish)
                }
                else {
                    localStorage.setItem("LoggedInToken", res.data);
                    dispatch({ type: LOGIN })
                }
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
                if (res.data === null) {
                    localStorage.setItem("LoggedInToken", res.data);
                    dispatch({ type: LOGIN })
                } else {
                    console.log('Username has been used') // Action when fila to signup (not finish)
                }
            })
    }
}

export const logoutThunk = () => (dispatch) => {
    localStorage.removeItem("LoggedInToken");
    dispatch({ type: LOGOUT })
}
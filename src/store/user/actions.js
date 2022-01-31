import axios from "axios";
import jwt_decode from "jwt-decode";
export const GET_USER = "GET_USER";
export const GET_CLIENT_NAME = "GET_CLIENT_NAME"


export function GetUser(name) {
    return {
        type: GET_USER,
        name: name
    };
}

export function GetClientName(name) {
    return {
        type: GET_CLIENT_NAME,
        name: name
    };
}

export function GetUserThunk() {
    return (dispatch) => {
        let token = localStorage.getItem("LoggedInToken");
        let id = jwt_decode(token).id
        axios
            .get(`${process.env.REACT_APP_API_SERVER}/api/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                dispatch(GetUser(response.data[0].name));
            });
    };
}

export function GetClientNameThunk() {
    return (dispatch) => {
        let token = localStorage.getItem("LoggedInToken");
        let id = jwt_decode(token).id;
        axios
            .get(`${process.env.REACT_APP_API_SERVER}/api/clientname/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                dispatch(GetClientName(response.data));
            });
    };
}
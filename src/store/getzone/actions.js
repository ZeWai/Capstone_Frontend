import axios from 'axios';

export const GET_CLIENT_ZONE = "GET_CLIENT_ZONE";

export function GetClientZone(zone) {
    return {
        type: GET_CLIENT_ZONE,
        payload: zone,
    };
}
export function GetClientZoneThunk() {
    return (dispatch) => {
        console.log("on thunk")
        let token = localStorage.getItem("LoggedInToken");
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/farmer/zone`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response.data);
                dispatch(GetClientZone(response.data));
            });
    }
}


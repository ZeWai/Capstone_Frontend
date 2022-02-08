import axios from 'axios';

export const GET_CLIENT_ZONE = "GET_CLIENT_ZONE";

export function GetClientZone(zone) {
    return {
        type: GET_CLIENT_ZONE,
        payload: zone,
    };
}
export function GetClientZoneThunk (location) {
    return (dispatch) => {
        let token = localStorage.getItem("LoggedInToken");
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/getzone/${location}`, {
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

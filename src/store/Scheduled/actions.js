import axios from 'axios';

export const GET_SCHEDULED_INFO = "GET_SCHEDULED_INFO";

export function GetClient(info) {
    return {
      type: GET_SCHEDULED_INFO,
      payload: info,
    };
  }
export function GetScheduledThunk(){
    return (dispatch) => {
        let token = localStorage.getItem("LoggedInToken");
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/dashboard/scheduled`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
        dispatch(GetClient(response.data));
        });
    }
}

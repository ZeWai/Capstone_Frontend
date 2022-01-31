import axios from 'axios';

export const GET_CLIENT_INFO = "GET_CLIENT_INFO";

export function GetClient(info) {
    return {
      type: GET_CLIENT_INFO,
      payload: info,
    };
  }
export function GetClientThunk(){
    return (dispatch) => {
      console.log("on thunk")
        // let token = localStorage.getItem("LoggedInToken");
        axios.get('http://localhost:8080/api/user/single'

        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      )
        .then((response) => {
        console.log(response.data);
        dispatch(GetClient(response.data));
        });
    }
}
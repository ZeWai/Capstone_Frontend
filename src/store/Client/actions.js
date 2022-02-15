import axios from 'axios';
export const GET_CLIENTLIST = "GET_CLIENTLIST";
export const GET_FARMERLIST = "GET_FARMERLIST";

export function GetClientList(data) {
  return {
    type: GET_CLIENTLIST,
    data: data,
  };
}
export function GetFarmerList(data) {
  return {
    type: GET_FARMERLIST,
    data: data,
  };
}

export function GetClientListThunk() {
  return (dispatch) => {
    let token = localStorage.getItem("LoggedInToken");
    axios.get(`${process.env.REACT_APP_API_SERVER}/api/clientList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch(GetClientList(response.data));
      });
  }
}

export function GetFarmerListThunk() {
  return (dispatch) => {
    let token = localStorage.getItem("LoggedInToken");
    axios.get(`${process.env.REACT_APP_API_SERVER}/api/farmerList`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch(GetFarmerList(response.data));
      });
  }
}
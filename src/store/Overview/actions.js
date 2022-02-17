import axios from 'axios';

export const GET_HARVEST= "GET_HARVEST";
export const GET_GROWING= "GET_GROWING";
export const GET_SOW= "GET_SOW";
export const GET_PRODUCTIVITY= "GET_PRODUCTIVITY";
export const GET_SIZE= "GET_SIZE";

export function GetHarvest(info) {
    return {
      type: GET_HARVEST,
      payload: info,
    };
  }

export function GetGrowing(info) {
  return {
    type: GET_GROWING,
    payload: info,
  };
}

export function GetSow(info) {
  return {
    type: GET_SOW,
    payload: info,
  };
}
export function GetSize(info) {
  return {
    type: GET_SIZE,
    payload: info,
  };
}
export function GetProductivity(info) {
  return {
    type: GET_PRODUCTIVITY,
    payload: info,
  };
}
export function GetOverThunk(){
    return (dispatch) => {
        let token = localStorage.getItem("LoggedInToken");
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/dashboard/harvest`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
        })
        .then((response) => {
        dispatch(GetHarvest(response.data));
        });

       
     
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/dashboard/growing`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
        })
        .then((response) => {
        dispatch(GetGrowing(response.data));
        });


        axios.get(`${process.env.REACT_APP_API_SERVER}/api/dashboard/sow`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
        })
        .then((response) => {
        dispatch(GetSow(response.data));
        });

        axios.get(`${process.env.REACT_APP_API_SERVER}/api/dashboard/size`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
          })
          .then((response) => {
          dispatch(GetSize(response.data));
          });

        axios.get(`${process.env.REACT_APP_API_SERVER}/api/dashboard/productivity`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
          })
        .then((response) => {
        dispatch(GetProductivity(response.data));
        });
    }
}
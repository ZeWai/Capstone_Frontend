import axios from 'axios';

export const GET_PROGRESS = "GET_PROGRESS";
export const GET_SINGLE_PROGRESS = "GET_SINGLE_PROGRESS";
export const GET_CROPSTORE = "GET_CROPSTORE";
export const GET_CROPINFO = "GET_CROPINFO";


export function GetProgress(info) {
  return {
    type: GET_PROGRESS,
    payload: info,
  };
}
export function GetProgressS(info) {
  return {
    type: GET_SINGLE_PROGRESS,
    payload: info,
  };
}

export function GetCropStore(info) {
  return {
    type: GET_CROPSTORE,
    payload: info,
  };
}

export function GetCropInfo(info) {
  return {
    type: GET_CROPINFO,
    payload: info,
  };
}

export function GetProgressThunk() {
  return (dispatch) => {
    console.log("on thunk")

    let token = localStorage.getItem("LoggedInToken");
    axios.get(`${process.env.REACT_APP_API_SERVER}/api/dashboard/progress`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        dispatch(GetProgress(response.data));
        if (response.data) {
          dispatch(GetProgressSThunk(response.data[0].id))
        }
      });
  }
}

export function GetProgressSThunk(id) {
  return (dispatch) => {
    console.log("on thunk", id)

    axios.get(`${process.env.REACT_APP_API_SERVER}/api/dashboard/progressS/${id}`)

      .then((response) => {
        console.log(response.data);
        dispatch(GetProgressS(response.data));
      });
  }
}

export function GetCropstoreThunk() {
  return (dispatch) => {
    axios.get(`http://localhost:8080/api/planner/getcropstore`)
      .then((response) => {
        console.log(response.data);
        dispatch(GetCropStore(response.data));
      });
  }
}

export function GetCropinfoThunk(crop) {
  console.log("AT", crop)
  return (dispatch) => {
    axios.get(`http://localhost:8080/api/planner/getcropinfo/${crop}`)
      .then((response) => {
        console.log(response.data);
        dispatch(GetCropInfo(response.data));
      });
  }
}
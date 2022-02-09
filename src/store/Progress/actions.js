import axios from 'axios';

export const GET_PROGRESS= "GET_PROGRESS";
export const GET_SINGLE_PROGRESS= "GET_SINGLE_PROGRESS";


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

export function GetProgressThunk(){
    return (dispatch) => {
      console.log("on thunk")
       
      let token = localStorage.getItem("LoggedInToken");
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/dashboard/progress`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
          })
        .then((response) => {
        console.log(response.data);
        dispatch(GetProgress(response.data));
        if(response.data){
        dispatch(GetProgressSThunk(response.data[0].id))
        }
        });
    }
}

export function GetProgressSThunk(id){
    return (dispatch) => {
      console.log("on thunk" , id)
       
        axios.get(`http://localhost:8080/api/dashboard/progressS/${id}`)
        
        .then((response) => {
        console.log(response.data);
        dispatch(GetProgressS(response.data));
        });
    }
}
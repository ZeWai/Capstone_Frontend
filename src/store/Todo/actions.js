import axios from 'axios';

export const GET_TODO = "GET_TODO";

export function GetTodo(data) {
    return {
      type: GET_TODO,
      payload: data,
    };
  }
export function GetTodoThunk(location,zone){
    return (dispatch) => {
        let token = localStorage.getItem("LoggedInToken");
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/crops/todo/${location}/${zone}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
        dispatch(GetTodo(response.data));
        });
    }
}

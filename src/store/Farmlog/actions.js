import axios from "axios";
// Action Constants
export const ADD_FARMLOG = "ADD_FARMLOG";
export const ADD_FARMLOG_CURRENT_VIEW = "ADD_FARMLOG_CURRENT_VIEW";

export default function AddFarmlog(farmlogInfo) {
  return {
    type: ADD_FARMLOG,
    payload: farmlogInfo,
  };
}

export function farmlogCurrentView(currentView) {
  return {
    type: ADD_FARMLOG_CURRENT_VIEW,
    payload: currentView,
  };
}

export function AddFarmlogThunk(farmlogInfo) {
  console.log("add farmlogInfo thunk:", farmlogInfo);

  return (dispatch) => {
    console.log("Adding farmlogInfo");
    let token = localStorage.getItem("LoggedInToken");
    axios
      .post(
        `${process.env.REACT_APP_API_SERVER}/api/farmlog`,
        { items: farmlogInfo.items },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch(AddFarmlog(response.data));
      });
  };
}

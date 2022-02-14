import axios from "axios";
// Action Constants
export const ADD_FARMLOG = "ADD_FARMLOG";
export const ADD_PLANTING = "ADD_PLANTING";
export const ADD_IRRIGATION = "ADD_IRRIGATION";
export const ADD_GROOMING = "ADD_GROOMING";
export const ADD_HARVEST = "ADD_HARVEST ";
export const ADD_GARDENMAN = "ADD_GARDENMAN";
export const ADD_OTHERISSIUES = "ADD_OTHERISSIUES";
export const ADD_ALL_INFO = "ADD_ALL_INFO";

export function AddFarmlog(farmlogInfo) {
  return {
    type: ADD_FARMLOG,
    payload: farmlogInfo,
  };
}

export function AddPlanting(plantingInfo) {
  return {
    type: ADD_PLANTING,
    payload: plantingInfo,
  };
}

export function AddIrrigation(irrigationInfo) {
  return {
    type: ADD_IRRIGATION,
    payload: irrigationInfo,
  };
}

export function AddGrooming(groomingInfo) {
  return {
    type: ADD_GROOMING,
    payload: groomingInfo,
  };
}
export function AddHarvest(harvestInfo) {
  return {
    type: ADD_HARVEST,
    payload: harvestInfo,
  };
}
export function AddGardenMan(gardenManInfo) {
  return {
    type: ADD_GARDENMAN,
    payload: gardenManInfo,
  };
}
export function AddOtherIssues(otherIssuesInfo) {
  return {
    type: ADD_OTHERISSIUES,
    payload: otherIssuesInfo,
  };
}

export function AddFarmlogThunk(allFarmlogInfo) {
  console.log("add farmlogInfo thunk:", allFarmlogInfo);

  return (dispatch) => {
    console.log("Adding farmlogInfo");
    let token = localStorage.getItem("LoggedInToken");
    axios
      .post(
        `${process.env.REACT_APP_API_SERVER}/api/farmlog`,
        { items: allFarmlogInfo.items },
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

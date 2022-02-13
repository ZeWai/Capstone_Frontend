import { ADD_FARMLOG } from "./actions";
import { ADD_PLANTING } from "./actions";
import { ADD_IRRIGATION } from "./actions";
import { ADD_GROOMING } from "./actions";
import { ADD_HARVEST } from "./actions";
import { ADD_GARDENMAN } from "./actions";
import { ADD_OTHERISSIUES } from "./actions";

const initialState = {
  farmlogInfo: {},
  plantingInfo: {},
  irrigationInfo: {},
  groomingInfo: {},
  harvestInfo: {},
  gardenManInfo: {},
  otherIssuesInfo: {},
};

export function farmlogReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FARMLOG:
      return {
        farmlogInfo: action.payload,
        plantingInfo: state.plantingInfo,
        irrigationInfo: state.irrigationInfo,
        groomingInfo: state.groomingInfo,
        harvestInfo: state.harvestInfo,
        gardenManInfo: state.gardenManInfo,
        otherIssuesInfo: state.otherIssuesInfo,
      };
    case ADD_PLANTING:
      return {
        farmlogInfo: state.farmlogInfo,
        plantingInfo: action.payload,
        irrigationInfo: state.irrigationInfo,
        groomingInfo: state.groomingInfo,
        harvestInfo: state.harvestInfo,
        gardenManInfo: state.gardenManInfo,
        otherIssuesInfo: state.otherIssuesInfo,
      };
    case ADD_IRRIGATION:
      return {
        farmlogInfo: state.farmlogInfo,
        plantingInfo: state.plantingInfo,
        irrigationInfo: action.payload,
        groomingInfo: state.groomingInfo,
        harvestInfo: state.harvestInfo,
        gardenManInfo: state.gardenManInfo,
        otherIssuesInfo: state.otherIssuesInfo,
      };
    case ADD_GROOMING:
      return {
        farmlogInfo: state.farmlogInfo,
        plantingInfo: state.plantingInfo,
        irrigationInfo: state.irrigationInfo,
        groomingInfo: action.payload,
        harvestInfo: state.harvestInfo,
        gardenManInfo: state.gardenManInfo,
        otherIssuesInfo: state.otherIssuesInfo,
      };
    case ADD_HARVEST:
      return {
        farmlogInfo: state.farmlogInfo,
        plantingInfo: state.plantingInfo,
        irrigationInfo: state.irrigationInfo,
        groomingInfo: state.groomingInfo,
        harvestInfo: action.payload,
        gardenManInfo: state.gardenManInfo,
        otherIssuesInfo: state.otherIssuesInfo,
      };
    case ADD_GARDENMAN:
      return {
        farmlogInfo: state.farmlogInfo,
        plantingInfo: state.plantingInfo,
        irrigationInfo: state.irrigationInfo,
        groomingInfo: state.groomingInfo,
        harvestInfo: state.harvestInfo,
        gardenManInfo: action.payload,
        otherIssuesInfo: state.otherIssuesInfo,
      };
    case ADD_OTHERISSIUES:
      return {
        farmlogInfo: state.farmlogInfo,
        plantingInfo: state.plantingInfo,
        irrigationInfo: state.irrigationInfo,
        groomingInfo: state.groomingInfo,
        harvestInfo: state.harvestInfo,
        gardenManInfo: state.gardenManInfo,
        otherIssuesInfo: action.payload,
      };

    default:
      return state;
  }
}

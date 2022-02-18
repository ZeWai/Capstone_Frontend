import { ADD_FARMLOG } from "./actions";
import { ADD_PLANTING } from "./actions";
import { ADD_IRRIGATION } from "./actions";
import { ADD_GROOMING } from "./actions";
import { ADD_HARVEST } from "./actions";
import { ADD_GARDENMAN } from "./actions";
import { ADD_OTHERISSIUES } from "./actions";
import { PLANTING_DONE } from "./actions";
import { IRRIGATION_DONE } from "./actions";
import { GROOMING_DONE } from "./actions";
import { HARVEST_DONE } from "./actions";
import { RESET_DATA } from "./actions";

const initialState = {
  farmlogInfo: {},
  plantingInfo: {},
  irrigationInfo: {},
  groomingInfo: {},
  harvestInfo: {},
  gardenManInfo: {},
  otherIssuesInfo: {},
  farmlogDone: {
    infoDone: true,
    plantingDone: false,
    irrigationDone: false,
    groomingDone: false,
    harvestDone: false,
    gardenManDone: true,
    otherIssuesDone: true,
  },
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
        farmlogDone: {
          infoDone: true,
          plantingDone: state.farmlogDone.plantingDone,
          irrigationDone: state.farmlogDone.irrigationDone,
          groomingDone: state.farmlogDone.groomingDone,
          harvestDone: state.farmlogDone.harvestDone,
          gardenManDone: true,
          otherIssuesDone: true,
        },
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
        farmlogDone: {
          infoDone: true,
          plantingDone: state.farmlogDone.plantingDone,
          irrigationDone: state.farmlogDone.irrigationDone,
          groomingDone: state.farmlogDone.groomingDone,
          harvestDone: state.farmlogDone.harvestDone,
          gardenManDone: true,
          otherIssuesDone: true,
        },
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
        farmlogDone: {
          infoDone: true,
          plantingDone: state.farmlogDone.plantingDone,
          irrigationDone: state.farmlogDone.irrigationDone,
          groomingDone: state.farmlogDone.groomingDone,
          harvestDone: state.farmlogDone.harvestDone,
          gardenManDone: true,
          otherIssuesDone: true,
        },
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
        farmlogDone: {
          infoDone: true,
          plantingDone: state.farmlogDone.plantingDone,
          irrigationDone: state.farmlogDone.irrigationDone,
          groomingDone: state.farmlogDone.groomingDone,
          harvestDone: state.farmlogDone.harvestDone,
          gardenManDone: true,
          otherIssuesDone: true,
        },
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
        farmlogDone: {
          infoDone: true,
          plantingDone: state.farmlogDone.plantingDone,
          irrigationDone: state.farmlogDone.irrigationDone,
          groomingDone: state.farmlogDone.groomingDone,
          harvestDone: state.farmlogDone.harvestDone,
          gardenManDone: true,
          otherIssuesDone: true,
        },
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
        farmlogDone: {
          infoDone: true,
          plantingDone: state.farmlogDone.plantingDone,
          irrigationDone: state.farmlogDone.irrigationDone,
          groomingDone: state.farmlogDone.groomingDone,
          harvestDone: state.farmlogDone.harvestDone,
          otherIssuesDone: true,
        },
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
        farmlogDone: {
          infoDone: true,
          plantingDone: state.farmlogDone.plantingDone,
          irrigationDone: state.farmlogDone.irrigationDone,
          groomingDone: state.farmlogDone.groomingDone,
          harvestDone: state.farmlogDone.harvestDone,
          gardenManDone: true,
          otherIssuesDone: true,
        },
      };
    case PLANTING_DONE:
      return {
        farmlogInfo: state.farmlogInfo,
        plantingInfo: state.plantingInfo,
        irrigationInfo: state.irrigationInfo,
        groomingInfo: state.groomingInfo,
        harvestInfo: state.harvestInfo,
        gardenManInfo: state.gardenManInfo,
        otherIssuesInfo: state.otherIssuesInfo,
        farmlogDone: {
          infoDone: true,
          plantingDone: action.payload,
          irrigationDone: state.farmlogDone.irrigationDone,
          groomingDone: state.farmlogDone.groomingDone,
          harvestDone: state.farmlogDone.harvestDone,
          gardenManDone: true,
          otherIssuesDone: true,
        },
      };
    case IRRIGATION_DONE:
      return {
        farmlogInfo: state.farmlogInfo,
        plantingInfo: state.plantingInfo,
        irrigationInfo: state.irrigationInfo,
        groomingInfo: state.groomingInfo,
        harvestInfo: state.harvestInfo,
        gardenManInfo: state.gardenManInfo,
        otherIssuesInfo: state.otherIssuesInfo,
        farmlogDone: {
          infoDone: true,
          plantingDone: state.farmlogDone.plantingDone,
          irrigationDone: action.payload,
          groomingDone: state.farmlogDone.groomingDone,
          harvestDone: state.farmlogDone.harvestDone,
          gardenManDone: true,
          otherIssuesDone: true,
        },
      };
    case GROOMING_DONE:
      return {
        farmlogInfo: state.farmlogInfo,
        plantingInfo: state.plantingInfo,
        irrigationInfo: state.irrigationInfo,
        groomingInfo: state.groomingInfo,
        harvestInfo: state.harvestInfo,
        gardenManInfo: state.gardenManInfo,
        otherIssuesInfo: state.otherIssuesInfo,
        farmlogDone: {
          infoDone: true,
          plantingDone: state.farmlogDone.plantingDone,
          irrigationDone: state.farmlogDone.irrigationDone,
          groomingDone: action.payload,
          harvestDone: state.farmlogDone.harvestDone,
          gardenManDone: true,
          otherIssuesDone: true,
        },
      };
    case HARVEST_DONE:
      return {
        farmlogInfo: state.farmlogInfo,
        plantingInfo: state.plantingInfo,
        irrigationInfo: state.irrigationInfo,
        groomingInfo: state.groomingInfo,
        harvestInfo: state.harvestInfo,
        gardenManInfo: state.gardenManInfo,
        otherIssuesInfo: state.otherIssuesInfo,
        farmlogDone: {
          infoDone: true,
          plantingDone: state.farmlogDone.plantingDone,
          irrigationDone: state.farmlogDone.irrigationDone,
          groomingDone: state.farmlogDone.groomingDone,
          harvestDone: action.payload,
          gardenManDone: true,
          otherIssuesDone: true,
        },
      };
    case RESET_DATA:
      return {
        farmlogInfo: {},
        plantingInfo: {},
        irrigationInfo: {},
        groomingInfo: {},
        harvestInfo: {},
        gardenManInfo: {},
        otherIssuesInfo: {},
        farmlogDone: {
          infoDone: true,
          plantingDone: false,
          irrigationDone: false,
          groomingDone: false,
          harvestDone: false,
          gardenManDone: true,
          otherIssuesDone: true,
        },
      };

    default:
      return state;
  }
}

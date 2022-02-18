// Action Constants
export const ADD_FARMLOG = "ADD_FARMLOG";
export const ADD_PLANTING = "ADD_PLANTING";
export const ADD_IRRIGATION = "ADD_IRRIGATION";
export const ADD_GROOMING = "ADD_GROOMING";
export const ADD_HARVEST = "ADD_HARVEST ";
export const ADD_GARDENMAN = "ADD_GARDENMAN";
export const ADD_OTHERISSIUES = "ADD_OTHERISSIUES";
export const PLANTING_DONE = "PLANTING_DONE";
export const IRRIGATION_DONE = "IRRIGATION_DONE";
export const GROOMING_DONE = "GROOMING_DONE";
export const HARVEST_DONE = "HARVEST_DONE";
export const RESET_DATA = "RESET_DATA";

export function ResetData() {
  return {
    type: RESET_DATA,
  };
}

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

export function PlantingDone(plantingDone) {
  return {
    type: PLANTING_DONE,
    payload: plantingDone,
  };
}

export function IrrigationDone(irrigationDone) {
  return {
    type: IRRIGATION_DONE,
    payload: irrigationDone,
  };
}
export function GroomingDone(groomingDone) {
  return {
    type: GROOMING_DONE,
    payload: groomingDone,
  };
}
export function HarvestDone(harvestDone) {
  return {
    type: HARVEST_DONE,
    payload: harvestDone,
  };
}

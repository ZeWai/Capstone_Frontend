import { GET_CROP, GET_CROP_ZONE } from "./actions";

const initialState = {
    ReadyToHarvest: "",
    CropStatus:""
}

export function cropReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CROP:
            return {
                ReadyToHarvest: action.payload,
                CropStatus:state.CropStatus
            };
        case GET_CROP_ZONE:
            return {
                ReadyToHarvest: state.ReadyToHarvest,
                CropStatus:action.payload
            };
        default:
            return state;
    }
}
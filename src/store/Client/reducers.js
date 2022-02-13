import { GET_CLIENTLIST } from "./actions";
import { GET_FARMERLIST } from "./actions";

const initialState = {
    ClientList: "",
    FarmerList: ""
}

export function clientListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CLIENTLIST:
            return {
                ClientList: action.data,
                FarmerList: state.FarmerList
            };
        default:
            return state;
    }
}

export function farmerListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FARMERLIST:
            return {
                ClientList: state.ClientList,
                FarmerList: action.data
            };
        default:
            return state;
    }
}
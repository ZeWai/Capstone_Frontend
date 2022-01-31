import { GET_PROGRESS, GET_SINGLE_PROGRESS  } from "./actions";

const initialState = {
    Progress: [],
    Single:[{
        // id: 1,
        // name:'Chili',
        // type:'Fruit',
        // contribution: 'event',
        // sowing_date: 2022
    }]
}


export function ProgressReducer(state = initialState, action) {
    switch(action.type){
        case GET_PROGRESS:
            return {
                Progress:action.payload,
                Single:state.Single,
            };
        case GET_SINGLE_PROGRESS:
            return {
                Progress:state.Progress,
                Single:action.payload,
            };
        default:
        return state;      
    }
}
import { GET_SCHEDULED_INFO  } from "./actions";

const initialState = {

    Scheduled:[{
        // id: 1,
        // name:'Chili',
        // type:'Fruit',
        // contribution: 'event',
        // sowing_date: 2022
    }]
}

export function ScheduledReducer(state = initialState, action) {
    switch(action.type){
        case GET_SCHEDULED_INFO :
            return {
                Scheduled:action.payload,
            };
        default:
        return state;      
    }
}
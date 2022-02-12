import { GET_HARVEST, GET_GROWING, GET_SOW, GET_PRODUCTIVITY  } from "./actions";

const initialState = {
    Oinfo:[0,0,0],
    Productivity: [{
        name:'',
        yield:'',
        harvest_date:[],
        contribution:'',
    }],
}


export function OverviewReducer(state = initialState, action) {
    switch(action.type){
        case GET_HARVEST :
             let data = state.Oinfo
              console.log(data)
                data[0]= action.payload
            return {
                Oinfo: data,
                Productivity:state.Productivity,
            };
        case GET_GROWING :
                let data2=state.Oinfo
                console.log(data2)
                data2[1]= action.payload
               return {
                   Oinfo: data2,
                   Productivity:state.Productivity,
               };
        case GET_SOW :
            let data3=state.Oinfo
            console.log(data3)
            data3[2]= action.payload
            return {
                Oinfo: data3,
                Productivity:state.Productivity,
            };
        case GET_PRODUCTIVITY :
        return {
            Oinfo: state.Oinfo,
            Productivity:action.payload
        };
        default:
        return state;      
    }
}
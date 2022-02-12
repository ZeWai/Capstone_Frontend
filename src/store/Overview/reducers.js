import { GET_HARVEST, GET_GROWING, GET_SOW, GET_PRODUCTIVITY , GET_SIZE } from "./actions";

const initialState = {
    Oinfo:[0,0,0],
    Size:[0],
    Productivity:[{
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
                Size:state.Size,
                Productivity:state.Productivity,
            };
        case GET_GROWING :
                let data2=state.Oinfo
                console.log(data2)
                data2[1]= action.payload
               return {
                   Oinfo: data2,
                   Size:state.Size,
                   Productivity:state.Productivity,
               };
        case GET_SOW :
            let data3=state.Oinfo
            console.log(data3)
            data3[2]= action.payload
            return {
                Oinfo: data3,
                Size:state.Size,
                Productivity:state.Productivity,
            };
        case GET_PRODUCTIVITY :
        return {
            Oinfo: state.Oinfo,
            Size:state.Size,
            Productivity:action.payload,
        };
        case GET_SIZE :
        return {
            Oinfo: state.Oinfo,
            Size:action.payload,
            Productivity:state.Productivity,
        };
        default:
        return state;      
    }
}
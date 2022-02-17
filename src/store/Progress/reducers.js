import { GET_PROGRESS, GET_SINGLE_PROGRESS , GET_CROPSTORE ,GET_CROPINFO} from "./actions";

const initialState = {
    CropStore:[],
    CropInfo:[{
    Irr_Period:"",
    type:""
    }],
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
                CropStore: state.CropStore,
                CropInfo: state.CropInfo,
                Progress:action.payload,
                Single:state.Single,
            };
        case GET_SINGLE_PROGRESS:
            return {
                CropStore: state.CropStore,
                CropInfo: state.CropInfo,
                Progress:state.Progress,
                Single:action.payload,
            };
        case GET_CROPSTORE:
            return {
                CropStore:action.payload,
                CropInfo: state.CropInfo,
                Progress:state.Progress,
                Single:state.Single,
            };
        case GET_CROPINFO:
            return {
                CropStore:state.CropStore,
                CropInfo:action.payload,
                Progress:state.Progress,
                Single:state.Single,
            };
        default:
        return state;      
    }
}
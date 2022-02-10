import axios from 'axios';

export const GET_CROP = "GET_CROP";
export const GET_CROP_ZONE = "GET_CROPZONE";

export function GetCrop(data) {
    return {
        type: GET_CROP,
        payload: data,
    };
}

export function GetZoneCrop(data) {
    return {
        type: GET_CROP_ZONE,
        payload: data,
    };
}

export function GetCropThunk(location) {
    return (dispatch) => {
        let token = localStorage.getItem("LoggedInToken");
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/crops/readytoharvest/${location}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                dispatch(GetCrop(response.data));
            });
    }
}

export function GetCropZoneThunk(location, zone) {
        return (dispatch) => {
            let token = localStorage.getItem("LoggedInToken");
            axios.get(`${process.env.REACT_APP_API_SERVER}/api/crops/readytoharvest/${location}/${zone}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    dispatch(GetZoneCrop(response.data));
                });
        }
}
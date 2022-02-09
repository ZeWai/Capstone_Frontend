import './Zone.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetCropZoneThunk } from '../../../../store/Getcrop/actions'

export default function ZonePage(props) {
    const dispatch = useDispatch();
    const zonestatus = useSelector((state) => state.cropStore.CropStatus)

    const type = ((type) => {
        if (type === "Fruit") {
            return "🍎";
        } else if (type === "Herb") {
            return '🌿';
        } else if (type === "Flower") {
            return "🌸"
        } else if (type === "Root/Stem") {
            return "🌱"
        } else if (type === "Leafy Green") {
            return "🥬"
        }
        else { return "☘️" }
    })
    useEffect(() => {
        dispatch(GetCropZoneThunk(props.location, props.currentview))
    }, [props.location, props.currentview]);

    return <>
        <div className='farmer-overview'>
            <div className="farmer-zone-crop">{props.location} Zone {props.currentview}</div></div>
    </>;
}

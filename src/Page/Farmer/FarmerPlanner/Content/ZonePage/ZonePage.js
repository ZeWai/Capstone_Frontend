import './Zone.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetCropZoneThunk } from '../../../../../store/Getcrop/actions'

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
            {zonestatus && Array.isArray(zonestatus) ? zonestatus.map((data) =>
                <div key={ `${data.name} ${data.harvest_date} ${data.sowing_date}`}className="farmer-zone-crop">
                <div className='farmer-zone-crop-left'>
                    <p className='crop-name'>{type(`${data.type}`)} {data.name}</p>
                        <p className='date'>Est. Harvest Date:{data.harvest_date.slice(8, 10)}/{data.harvest_date.slice(5, 7)}/{data.harvest_date.slice(0, 4)}</p>
                        <p className='date'>Sow Date:{data.sowing_date.slice(8, 10)}/{data.sowing_date.slice(5, 7)}/{data.sowing_date.slice(0, 4)}</p>
                </div>
                    <div className='farmer-zone-crop-right'>
                        <p>Status</p>
                        <p className='display-zone'>Zone {data.area}</p>
                    </div>
                </div>) : <div className="farmer-zone-crop">No Crop</div>}</div>
            
    </>;
}

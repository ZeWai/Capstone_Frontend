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

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = `${yyyy}-${mm}-${dd}`;

    const status = ((sowing, harvest, harvest_date, sowing_date) => {
        if (sowing.trim() === "true" && harvest.trim() === "false" && harvest_date > today && sowing_date < today)
        { return "Growing" }
        else if (sowing.trim() === "true" && harvest.trim() === "false" && harvest_date <= today && sowing_date < today)
        { return "Harvest" }
        else if (sowing.trim() === "false" && harvest.trim() === "false" && sowing_date >= today)
        { return "Sowing" }
    })
    useEffect(() => {
        dispatch(GetCropZoneThunk(props.location, props.currentview))
    }, [props.location, props.currentview]);

    return <>
        <div className='farmer-overview'>
            {zonestatus && zonestatus[0]!=="" ? zonestatus.map((data) =>
                <div key={`${data.name} ${data.harvest_date} ${data.sowing_date}`} className="farmer-zone-crop">
                    <div className='farmer-zone-crop-left'>
                        <p className='crop-name'>{type(`${data.type}`)} {data.name}</p>
                        <p className='date'>Est. Harvest Date:{data.harvest_date.slice(8, 10)}/{data.harvest_date.slice(5, 7)}/{data.harvest_date.slice(0, 4)}</p>
                        <p className='date'>Sow Date:{data.sowing_date.slice(8, 10)}/{data.sowing_date.slice(5, 7)}/{data.sowing_date.slice(0, 4)}</p>
                    </div>
                    <div className='farmer-zone-crop-right'>
                        <p className='farmer-crop-status'>{status(`${data.sowing}`, ` ${data.harvest}`, `${data.harvest_date.slice(0, 10)}`, `${data.sowing_date.slice(0, 10)}`)}</p>
                        <p className='display-zone'>Zone {data.area}</p>
                    </div>
                </div>) : <div className="farmer-zone-crop">No Crop</div>}</div>

    </>;
}

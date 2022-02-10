import './Overview.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {GetCropThunk} from '../../../../store/Getcrop/actions'

export default function Overview(props) {
    const today = new Date();
    const dispatch = useDispatch();
    const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const readytoharvest = useSelector((state) => state.cropStore.ReadyToHarvest)

    useEffect(() => {
        dispatch(GetCropThunk(props.location))
    }, [props.location,props.currentview]);

    const harvest = [];
    if(readytoharvest.length >=6){
    for (let i = 0; i <= 5; i++){
        harvest.push(readytoharvest[i])
        };
    } else if (readytoharvest.length>1 && readytoharvest.length<5){
        for (let i = 0; i <= readytoharvest.length; i++) {
            harvest.push(readytoharvest[i])
        };
    }
    const type = ((type) => {
        if (type === "Fruit") {
            return "🍎";
        } else if (type === "Herb") {
            return '🌿';
        } else if (type ==="Flower") {
            return "🌸"
        } else if (type === "Root/Stem") {
            return "🌱"
        } else if (type === "Leafy Green") {
            return "🥬"
        }
            else
        { return "☘️" }
        
    })

    return<>
    <div className='farmer-overview'>
        <div className='schedule'>
            <p className='title'>Estimate Harvest Schedule </p>
                {harvest && Array.isArray(harvest) ? harvest.map((data) =>
                <div key={`${data.name} ${data.yield} ${data.area} ${data.harvest_date}`} className='farmer_schedule'>
                    <span>{data.harvest_date.slice(8, 10)}/{data.harvest_date.slice(5, 7)}</span>
                    <br/>
                    <span>{type(`${data.type}`)}</span>
                    <br />
                    <span> {data.name}</span>
                    <br />
                    <span> {data.yield}</span>
                    <br />
                    <span> Zone {data.area}</span></div>)
                : <span>No Crops Here</span>}
        </div>
        </div>
    </>;
}

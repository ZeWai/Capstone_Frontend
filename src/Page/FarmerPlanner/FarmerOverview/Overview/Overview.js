import "./Overview.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetCropThunk } from "../../../../store/Getcrop/actions";

export default function Overview(props) {
  const dispatch = useDispatch();
  const readytoharvest = useSelector((state) => state.cropStore.ReadyToHarvest);

  useEffect(() => {
    dispatch(GetCropThunk(props.location));
  }, [dispatch, props.location, props.currentview]);

  const harvest = [];
  if (readytoharvest.length >= 6) {
    for (let i = 0; i <= 5; i++) {
      harvest.push(readytoharvest[i]);
    }
  }
  if (readytoharvest.length > 1 && readytoharvest.length <= 5) {
    for (let i = 0; i < readytoharvest.length; i++) {
      harvest.push(readytoharvest[i]);
    }
  }

  const type = (type) => {
    if (type === "Fruit") return "🍒";
    if (type === "Herb") return "🌿";
    if (type === "Flower") return "🌸";
    if (type === "Root/Stem") return "🥔";
    if (type === "Leafy Green") return "🥬";
    return "☘️";
  };
  return (
    <>
      <div className="farmer-overview">
        <div className="schedule">
          <p className="title">Estimate Harvest Schedule </p>
          {harvest && harvest[0] !== [] ? (
            harvest.map((data) => (
              <div
                key={`${data.name} ${data.yield} ${data.area} ${data.harvest_date}`}
                className="farmer_schedule"
              >
                <span>
                  {data.harvest_date.slice(8, 10)}/
                  {data.harvest_date.slice(5, 7)}
                </span>
                <br />
                <span>{type(`${data.type}`)}</span>
                <br />
                <span> {data.name}</span>
                <br />
                <span> {data.yield} kg</span>
                <br />
                <span> Zone {data.area}</span>
              </div>
            ))
          ) : (
            <span>No Crops Here</span>
          )}
        </div>
      </div>
    </>
  );
}

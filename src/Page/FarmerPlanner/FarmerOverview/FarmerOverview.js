import "./FarmerOverview.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetClientNameThunk } from "../../../store/user/actions";
import { GetClientZoneThunk } from "../../../store/getzone/actions";
import Overview from "./Overview/Overview";
import ZonePage from "./ZonePage/ZonePage";
import Todolist from "./Todolist/Todolist";

export default function FarmerOverview() {
  const clientname = useSelector((state) => state.userStore.clientNames);
  const clientzone = useSelector((state) => state.zoneStore.clientZone);
  const dispatch = useDispatch();
  const [location, setLocation] = useState("Loading");
  const [currentview, setCurrentview] = useState("Overview");

  if (clientname.length > 0 && location === "Loading") {
    setLocation(clientname[0].username);
    dispatch(GetClientZoneThunk(clientname[0].username));
  }
  useEffect(() => {
    dispatch(GetClientNameThunk());
  }, [dispatch]);

  const getlocation = (e) => {
    setLocation(e.currentTarget.value);
    dispatch(GetClientZoneThunk(e.currentTarget.value));
    setCurrentview("Overview");
  };

  return (
    <>
      <div className="farmer_content">
        <span>Farm Planner | Floor plan</span>
        <select
          value={location}
          className="dropdown"
          onChange={(e) => getlocation(e)}
        >
          {clientname && clientname[0] !== undefined ? (
            clientname.map((client) => (
              <option key={client.username} value={client.username}>
                {client.username}
              </option>
            ))
          ) : (
            <option>Please contact admin</option>
          )}
        </select>
        <br />
        <div className="slidebtn">
          <button
            className={currentview === "Overview" ? "ActiveTab" : "Tab"}
            onClick={() => setCurrentview("Overview")}
          >
            Overview
          </button>
          {clientzone && clientzone[0] !== undefined ? (
            clientzone.map((zone) => (
              <button
                className={currentview === `${zone.area}` ? "ActiveTab" : "Tab"}
                key={zone.area}
                onClick={() => setCurrentview(`${zone.area}`)}
              >
                Zone {zone.area}
              </button>
            ))
          ) : (
            <span>Please contact admin</span>
          )}
        </div>
        {currentview === "Overview" ? (
          <>
            <div className="selectbtncontainer">
              {clientzone && clientzone[0] !== "" ? (
                clientzone.map((zone) => (
                  <button
                    className="selectbtn"
                    key={zone.area}
                    onClick={() => setCurrentview(`${zone.area}`)}
                  >
                    Zone {zone.area}
                  </button>
                ))
              ) : (
                <span>Please contact admin</span>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {currentview === "Overview" ? (
        <Overview location={location} currentview={currentview} />
      ) : (
        <ZonePage currentview={currentview} location={location} />
      )}
      <Todolist location={location} currentview={currentview} />
    </>
  );
}

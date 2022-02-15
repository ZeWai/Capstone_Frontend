import Navbar from './Navbar/Navbar'
import FarmerOverview from './FarmerOverview/Overview'
import { useState } from 'react'
import FarmLogContent from './FarmerFarmlog/FarmLogContent'
import Setting from './FarmerSetting/Setting'

export default function FarmerPlanner() {
    const [view, setView] = useState("Overview")
    return <div style={{ backgroundColor: 'rgb(249, 246, 237)' }}>
        <Navbar view={view} setView={setView} />
        {view === "Overview" ? <FarmerOverview/> : <></>}
        {view === "Farm_log" ? <FarmLogContent/> : <></>}
        {view === "Setting" ? <Setting/> : <></>}
    </div>;

}

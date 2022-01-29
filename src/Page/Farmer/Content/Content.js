import './Content.css'
import { Tabs, Tab } from 'react-bootstrap'
import { useState} from 'react'

export default function Content() {
    const [checked, setChecked] = useState(false);
    const [zone, setZone] = useState('0');

    const zones = [
        { name: 'Overview', value: '0' },
        { name: 'Zone A', value: '1' },
        { name: 'Zone B', value: '2' },
        { name: 'Zone C', value: '3' },
        { name: 'Zone D', value: '4' },
        { name: 'Zone E', value: '5' },
        { name: 'Zone F', value: '6' }
    ]

    return <div className='farmer_content'>
        <span>Farm Planner | floor plan</span> 
        <select name="location" className='dropdown'>
            <option value="metroplaza">Metroplaza</option>
            <option value="hysan place">Hysan Place</option>
        </select>
        <br />
        <div className="slidebtn">
            <Tabs defaultActiveKey="Overview">
                <Tab eventKey="Overview" title="Overview" className='Tab'>
                </Tab>
                <Tab eventKey="Zone A" title="Zone A">
                </Tab>
                <Tab eventKey="Zone B" title="Zone B">
                </Tab>
                <Tab eventKey="Zone C" title="Zone C">
                </Tab>
                <Tab eventKey="Zone D" title="Zone D">
                </Tab>
                <Tab eventKey="Zone E" title="Zone E">
                </Tab>
                <Tab eventKey="Zone F" title="Zone F">
                </Tab>
            </Tabs></div>
  </div>;
}

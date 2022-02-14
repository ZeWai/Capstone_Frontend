import Navbar from '../Navbar/Navbar'
import Content from './Content/Content'
import { useState } from 'react';

export default function FarmerPlanner() {
    const [view, setview] = useState("overview")

    return <div style={{ backgroundColor: 'rgb(249, 246, 237)' }}>
        <Navbar />
        <Content />
    </div>;

}

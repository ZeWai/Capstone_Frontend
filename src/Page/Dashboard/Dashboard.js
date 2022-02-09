import { Clientinfo } from './Clientinfo';
import { FarmoverV } from './FarmoverV';
import { Progress } from './Progress';
import { DashNavbar } from './Navbar';
import './Dashboard.css'
export default function Dashboard  ()  {
    return (
    <div>
    <DashNavbar />
    <Clientinfo  />
    <FarmoverV  />
    <Progress name="bb" />
    </div>
    )
}
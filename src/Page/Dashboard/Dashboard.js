import { Clientinfo } from './Clientinfo';
import { FarmoverV } from './FarmoverV';
import { Progress } from './Progress';
import './Dashboard.css'
export default function Dashboard  ()  {
    return (
    <div>
    <Clientinfo  />
    <FarmoverV  />
    <Progress name="bb" />
    </div>
    )
}
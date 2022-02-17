import { Clientinfo } from "./Clientinfo";
import { FarmoverV } from "./FarmoverV";
import { Progress } from "./Progress";
import { DashNavbar } from "./Navbar";
import { Scheduled } from "./Scheduled";
import { FooterPage } from "./FooterPage";

import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div>
      <DashNavbar Onview="dashboard" />
      <Clientinfo />
      <FarmoverV />
      <Progress />
      <Scheduled />
      <FooterPage />
    </div>
  );
}

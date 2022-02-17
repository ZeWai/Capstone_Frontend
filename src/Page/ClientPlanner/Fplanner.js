import { Clientplanner } from "./Clientplanner";
import { DashNavbar } from "../Dashboard/Navbar";
import "./Clientplanner.css";
export function Fplanner() {
  return (
    <div>
      <DashNavbar Onview="scheduled" />
      <Clientplanner />
    </div>
  );
}

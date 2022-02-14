import Navbar from "../Navbar/Navbar";
import FarmLogContent from "./Content/FarmLogContent";

export default function Farmlog() {
  const farmlogCurrentView = "Step 1";
  return (
    <div style={{ backgroundColor: "rgb(249, 246, 237)" }}>
      <Navbar />
      <FarmLogContent />
    </div>
  );
}

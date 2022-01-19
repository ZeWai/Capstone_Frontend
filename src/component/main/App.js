import { Routes, Route } from "react-router-dom"
import "../../css/App.css";
import Home from "../page/Home";
import Signup from "../page/Signup";
import NoMatch from "../page/NoMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

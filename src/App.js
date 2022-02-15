import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Page/Home/Home";
import { useSelector, useDispatch } from "react-redux";
import Admin from "./Page/Admin/Admin";
import Dashboard from "./Page/Dashboard/Dashboard";
import FarmerPlanner from "./Page/FarmerPlanner/FarmerPlanner";
import { Fplanner } from "./Page/ClientPlanner/Fplanner";
import { logoutThunk } from "./store/auth/action";

function ClientAuth({ children }) {
  let auth = useSelector((state) => state.authStore.auth);
  let role = useSelector((state) => state.authStore.role);
  return auth && role === "client" ? children : <Navigate to="/home" />;
}

function AdminAuth({ children }) {
  let auth = useSelector((state) => state.authStore.auth);
  let role = useSelector((state) => state.authStore.role);
  return auth && role === "admin" ? children : <Navigate to="/home" />;
}

function FarmerAuth({ children }) {
  let auth = useSelector((state) => state.authStore.auth);
  let role = useSelector((state) => state.authStore.role);
  return auth && role === "farmer" ? children : <Navigate to="/home" />;
}
function App() {
  const dispatch = useDispatch();
  dispatch(logoutThunk());
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<ClientAuth><Dashboard /></ClientAuth>}/>
          <Route
            path="/client_planner"
            element={
              <ClientAuth>
                <Fplanner />
              </ClientAuth>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminAuth>
                <Admin />
              </AdminAuth>
            }
          />
          <Route path="/farm_planner" element={<FarmerAuth> <FarmerPlanner /> </FarmerAuth>}/>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

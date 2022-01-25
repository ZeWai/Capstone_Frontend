import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Admin from "./Page/Admin/Admin";
// import { useSelector } from "react-redux";

// function Auth({ page }) {
//   let auth = useSelector((state) => state.authStore.auth)
//   return auth ? page : <Navigate to='/home' />;
// }

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to='/home' />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/dashboard" element={<Auth><Dashboard /></Auth>} />
          <Route path="/admin" element={<Auth><Admin /></Auth>} />
          <Route path="/farm_planner" element={<Auth><Farmplanner /></Auth>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to='/home' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, BrowserRouter, Naviage } from "react-router-dom"
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";

function Auth({ page }) {
  let auth = userSelector((state) => state.authStore.auth)
  return auth ? page : <Naviage to='/home' />;
}

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Naviage to ='home' />} />
          <Route path="/home" element={<Auth><Home/></Auth>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Naviage to='home' />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
